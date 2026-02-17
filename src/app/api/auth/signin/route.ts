import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error("Error in GET /api/auth/signin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      const user = await prisma.user.update({
        where: { email },
        data: { name },
      });
      console.log("User updated:", user);
      return NextResponse.json({ message: "User updated successfully", user });
    } else {
      const user = await prisma.user.create({
        data: { email, name },
      });
      console.log("User created:", user);
      return NextResponse.json({ message: "User created successfully", user });
    }

  } catch (error) {
    console.error("Error in POST /api/auth/signin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}