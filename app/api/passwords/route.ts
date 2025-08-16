import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/passwords
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = await prisma.password.create({
      data: {
        siteName: body.siteName,
        url: body.url,
        username: body.username,
        password: body.password,
      },
    });

    return NextResponse.json(password, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save password" }, { status: 500 });
  }
}

// GET /api/passwords
export async function GET() {
  try {
    const passwords = await prisma.password.findMany();
    return NextResponse.json(passwords);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch passwords" }, { status: 500 });
  }
}
