import Layout from "@/app/components/Layout";
import React from "react";

function page() {
  return (
    
    <div className="w-full h-full ">
      <h1 className="text-center">Configuraciones del Sistema</h1>
      <details className="bg-gray-100 p-2 hover:cursor-pointer transition duration-500">
        <summary>Que estoy haciendo ahora?</summary>
        <p className="bg-sky-100 p-2 rounded-md mt-2">Estoy hablando con mi mama</p>
      </details>
      <details className="bg-gray-100 p-2 hover:cursor-pointer">
        <summary>Que estoy haciendo ahora?</summary>
        <p className="bg-sky-100 p-2 rounded-md mt-2">Estoy hablando con mi mama</p>
      </details>
      <details className="bg-gray-100 p-2 hover:cursor-pointer">
        <summary>Que estoy haciendo ahora?</summary>
        <p className="bg-sky-100 p-2 rounded-md mt-2">Estoy hablando con mi mama</p>
      </details>
    </div>
    
  );
}

export default page;
