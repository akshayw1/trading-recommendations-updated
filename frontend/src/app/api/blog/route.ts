import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import jwt from "jsonwebtoken";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase";

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get("image") as unknown as File;
  const title: string = data.get("title") as unknown as string;
  const text: string = data.get("text") as unknown as string;
  const author: string = data.get("author") as unknown as string;
  const tags: string[] = data.getAll("tags") as string[];
  if (!file) {
    return NextResponse.json({ success: false, error: "file no supported" });
  }

  const token = jwt.sign({ name: file.name }, `${process.env.NEXTAUTH_SECRET}`);
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const storageRef = ref(storage, `images/${token}${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, buffer);

  const imageUrl: string = await new Promise<string>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("uploaded to firebase boss");
          resolve(url);
        } catch (error) {
          reject(error);
        }
      }
    );
  });

  await connectMongoDB();
  const postCreated = await Post.create({
    title,
    text,
    author,
    imageUrl,
    tags,
    datePost: new Date(),
  });
  if (postCreated)
    return NextResponse.json(
      { message: "Post created", postID: postCreated.id },
      { status: 201 }
    );
  else
    return NextResponse.json(
      { message: "Error creating post" },
      { status: 400 }
    );
}