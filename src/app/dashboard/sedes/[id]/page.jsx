

import React from "react";
import { Filtros } from "./Filtros";
import ListReservas from "./ListReservas";
import { fetchReservas } from "@/app/libs/data";
import { getReservas } from "@/app/controllers/reservas";




export default async function Sedes() {

  const data = await fetchReservas()
 
  return (
    <div className="">
      <h1>Reservas</h1>

      <div className=" w-full h-full p-4 ">
      

        <ListReservas data={data} />
      </div>
    </div>
  );
}


