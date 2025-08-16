import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/cards
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const card = await prisma.creditCard.create({
      data: {
        cardName: body.cardName,
        cardHolder: body.cardHolder,
        cardNumber: body.cardNumber,
        expiryDate: body.expiryDate,
        cvv: body.cvv,
      },
    });

    return NextResponse.json(card, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save card" }, { status: 500 });
  }
}

// GET /api/cards
export async function GET() {
  try {
    const cards = await prisma.creditCard.findMany();
    return NextResponse.json(cards);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}
