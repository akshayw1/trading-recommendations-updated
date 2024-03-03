import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";

export async function GET(req: Request, { params }: any) {
  console.log("yo");
  const id = params.id;
  console.log(id);

  await connectMongoDB();
  const postFound = await Post.findById(id);

  if (postFound) {
    return NextResponse.json(
      { message: "OI Found", post: postFound },
      { status: 201 }
    );
  } else
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
}