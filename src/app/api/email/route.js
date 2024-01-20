import EmailComponent from "@/app/components/EmailComponent";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

/* import  palindromoFecha  from "@/app/reservar/page"; */
const resend = new Resend(process.env.KEY_RESEND);

export async function POST(req, res) {

  const reserva = await req.json();

  const { nombre, fecha, comensales, nota, email, sede, hora } = reserva;

  console.log(nombre, fecha, comensales, nota, email, sede, hora);
 



  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["marlon7piri@gmail.com"],
      subject: `Nueva Reserva`,
      react: (
        <EmailComponent
          nombre={nombre}
          fecha={fecha}
          comensales={comensales}
          nota={nota}
          sede={sede}
          hora={hora}
        />
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
