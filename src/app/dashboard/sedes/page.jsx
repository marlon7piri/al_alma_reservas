import CardSedes from "@/app/components/CardSedes";
import { fetchSedes } from "@/app/libs/data";

import React from "react";



async function Sedes() {
  const data = await fetchSedes();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <CardSedes data={data} />
    </div>
  );
}

export default Sedes;
