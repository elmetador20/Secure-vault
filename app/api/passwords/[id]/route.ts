import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE /api/passwords/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid password ID" }, { status: 400 });
    }

    // Check if password exists
    const existingPassword = await prisma.password.findUnique({
      where: { id },
    });

    if (!existingPassword) {
      return NextResponse.json({ error: "Password not found" }, { status: 404 });
    }

    // Delete the password
    await prisma.password.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Password deleted successfully" });
  } catch (error) {
    console.error("Error deleting password:", error);
    return NextResponse.json({ error: "Failed to delete password" }, { status: 500 });
  }
}

// GET /api/passwords/[id] - Optional: Get a specific password
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid password ID" }, { status: 400 });
    }

    const password = await prisma.password.findUnique({
      where: { id },
    });

    if (!password) {
      return NextResponse.json({ error: "Password not found" }, { status: 404 });
    }

    return NextResponse.json(password);
  } catch (error) {
    console.error("Error fetching password:", error);
    return NextResponse.json({ error: "Failed to fetch password" }, { status: 500 });
  }
}