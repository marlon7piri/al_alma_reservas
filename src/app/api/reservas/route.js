import { NextResponse } from "next/server";
import { connectDb } from "@/app/libs/utils";
import { Reservas } from "@/app/libs/models";

export async function GET() {
  try {
    connectDb();
    const data = await Reservas.find({});
console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}

export async function POST(req) {
  const newreserve = await req.json();

  try {
    connectDb();
    const data = await new Reservas(newreserve);

    const savedData = await data.save();

    return NextResponse.json(savedData);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
