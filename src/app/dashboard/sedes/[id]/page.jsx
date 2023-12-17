"use client";

import React from "react";
import { Filtros } from "./Filtros";
import ListReservas from "./ListReservas";
import { fetchReservas } from "@/app/libs/data";




export default async function Sedes({ params }) {

  const reservas = await fetchReservas()
 /*  const [comensales, setComensales] = useState(null);
  const [fecha, setFecha] = useState("");



  useEffect(() => {
    const fechaActual = new Date().toISOString().split("T")[0];

   

    setFecha(fechaActual);
    getReservas();
  }, []); */

  return (
    <div>
      <h1>Reservas</h1>

      <div className=" w-full h-full p-4 ">
        {/*  <Filtros
          setComensales={setComensales}
          setFecha={setFecha}
          fecha={fecha}
        /> */}

        <ListReservas reservas={reservas} />
      </div>
    </div>
  );
}


