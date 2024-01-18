import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { MongooseError } from "mongoose";

export async function POST (req: NextRequest) {
  try {
    const { email, password }: { email: string; password: string } =
      await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password are Necessary" },
        { status: 403 }
      );
    }
    if (email.length < 5 || password.length < 5) {
      return NextResponse.json(
        { message: "Email and Password must be greater than 5 charaters" },
        { status: 403 }
      );
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 403 }
      );
    }
    const response = await User.create({ email: email.toLowerCase(), password: hashedPass })
      .then(() => {
        return NextResponse.json(
          { message: "User Registered Successfully" },
          { status: 201 }
        );
      })
      .catch((err: MongooseError) => {
        return NextResponse.json(
          {
            message: err?.message || "Some error occured during user creation",
          },
          { status: 400 }
        );
      });
      return response;
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured during user creation" },
      { status: 400 }
    );
  }
};
