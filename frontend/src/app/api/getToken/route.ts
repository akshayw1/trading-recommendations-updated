import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  let { email } = await req.json();
  email = email.toUpperCase();
  const token = jwt.sign({ email }, `${process.env.NEXTAUTH_SECRET}`, {
    expiresIn: "1h",
  });
  await connectMongoDB();
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/resetpass/${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.RESET_EMAIL}`,
      pass: `${process.env.RESET_APP_PASS}`,
    },
  });
  const mailOptions = {
    from: `${process.env.RESET_EMAIL}`,
    to: email,
    subject: "password recovery",
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Password</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
    
        .container {
          text-align: center;
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #333;
        }
    
        p {
          color: #555;
          margin-bottom: 20px;
        }
    
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
    
        .button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <h1>Reset Password</h1>
        <p>To reset your password, click the button below:</p>
        <a class="button" style="color: #fff;" href="${resetUrl}" target="_blank">Reset Password</a>
      </div>
    </body>
    
    </html>
    `,
  };

  const verifyUser = await User.findOneAndUpdate(
    { email },
    { $set: { "resetToken.tokenId": token } },
    { new: true }
  );

  console.log(resetUrl);

  if (verifyUser) {
    console.log("valid  ");

    return await transporter
      .sendMail(mailOptions)
      .then((response: nodemailer.SentMessageInfo) => {
        return NextResponse.json(
          { message: `email send to ${email}` },
          { status: 201 }
        );
      })
      .catch((error: nodemailer.SentMessageInfo) => {
        return NextResponse.json(
          { message: "error when sending message", ok: false },
          { status: 201 }
        );
      });
  } else {
    return NextResponse.json({ message: "user no exist" }, { status: 201 });
  }
}
