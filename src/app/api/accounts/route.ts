import { NextResponse } from "next/server";
import { initDB } from "@/lib/db";
import { Treasure } from "@/entities/Treasure";

export async function GET() {
  const db = await initDB();
  const treasures = await db.getRepository(Treasure).find();

  return NextResponse.json(treasures);
}

export async function POST(req: Request) {
  const db = await initDB();
  const body = await req.json();

  const treasure = db.getRepository(Treasure).create(body);
  await db.getRepository(Treasure).save(treasure);

  return NextResponse.json(treasure, { status: 201 });
}
