import { NextResponse } from "next/server";
import { connectDb } from "@/app/libs/utils";
import { Reservas } from "@/app/libs/models";

export async function DELETE(req,{params}) {
    const id = params.id
  try {
    connectDb();
    const data = await Reservas.findByIdAndDelete(id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}