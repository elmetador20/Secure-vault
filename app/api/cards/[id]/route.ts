import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE /api/cards/[id]
export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return NextResponse.json({ error: "Invalid card ID" }, { status: 400 });
    }

    // Check if card exists
    const existingCard = await prisma.creditCard.findUnique({
      where: { id: parsedId },
    });

    if (!existingCard) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    // Delete the card
    await prisma.creditCard.delete({
      where: { id: parsedId },
    });

    return NextResponse.json({ success: true, message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    return NextResponse.json({ error: "Failed to delete card" }, { status: 500 });
  }
}

// GET /api/cards/[id]
export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return NextResponse.json({ error: "Invalid card ID" }, { status: 400 });
    }

    const card = await prisma.creditCard.findUnique({
      where: { id: parsedId },
    });

    if (!card) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    return NextResponse.json(card);
  } catch (error) {
    console.error("Error fetching card:", error);
    return NextResponse.json({ error: "Failed to fetch card" }, { status: 500 });
  }
}
