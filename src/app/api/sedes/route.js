import { NextResponse } from "next/server";
import { Sedes } from "../../libs/models";
import { connectDb } from "../../libs/utils";

export async function GET() {
  try {
    connectDb();
    const sedes = await Sedes.find({});

    return NextResponse.json(sedes)
  } catch (error) {
    return NextResponse.json(error)
  }
}
