import React from "react";
import ReservasTotales from "../components/ReservasTotales";
import ComensalesTotales from "../components/ComensalesTotales";
import GraficaReservas from "../components/GraficaReservas";
import { fetchReservas } from "../libs/data";




 async function Dashboard() {
  const reservas = await fetchReservas();

 
  return (
    
    <div className="w-full h-full p-4">
      <div className="w-full h-[200px]   flex justify-between gap-4">
       <ReservasTotales reservas={reservas} />
        <ComensalesTotales reservas={reservas} /> 
      </div>
      <div className="w-full h-full mt-4">
        <GraficaReservas />
      </div>
    </div>
   
  );
}
export default  Dashboard