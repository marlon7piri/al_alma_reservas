"use client";

import Link from "next/link";
import React from "react";

 function CardSedes({data}) {
 

  return (
    <div className="w-full h-full m-auto flex flex-wrap justify-center items-center gap-4 p-4">
      {data?.map((e) => {
        return (
          <Link
            key={e._id}
            className="bg-[#FCF9F9] ml-4 p-4 rounded-2xl lg:w-[400px] sm:min-w-[300px]  lg:text-xl sm:text-[14px] hover:scale-105 duration-500 hover:shadow-gray-950 shadow-2xl min-h-[200px] h-[250px]"
            href={`/dashboard/sedes/${e.sede}`}
          >
            <h3>Sede: {e.sede}</h3>
            <p>Capacidad: {e.capacidad} personas</p>
            <p>Horario: {e.horario}</p>
            <p>Telefono: {e.telefono}</p>
            <p>Direccion: {e.direccion}</p>
          </Link>
        );
      })} 
    </div>
  );
}

export default CardSedes;
