import { NextResponse } from "next/server";

import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";

export async function GET(req: Request) {
  await connectMongoDB();

  const users = await User.find({}).select("email isVerifiedUser admin");

  return NextResponse.json({ users }, { status: 201 });
}
