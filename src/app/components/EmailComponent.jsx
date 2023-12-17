import React from "react";


const EmailComponent = ({ nombre, fecha, comensales, nota, sede, hora }) => {
  return (
    <div>
      <h1 className="text-3xl text-gray-500">
        Tienes una nueva reserva a nombre de {nombre}
      </h1>

      <div className="border border-gray-900 flex flex-grow">
        <h2>Detalles de la reserva</h2>
        <h2 className="text-xl text-gray-500 font-black">
          Fecha: <span className="text-gray-200">{fecha}</span>
        </h2>
        <h2 className="text-xl text-gray-500 font-black">
          Hora: <span className="text-gray-200">{hora}</span>
        </h2>
        <h2 className="text-xl text-gray-500 font-black">
          Comensales: <span className="text-gray-200">{comensales} personas</span>
        </h2>
        <h2 className="text-xl text-gray-500 font-black">
          Sede: <span className="text-blue-400">{sede}</span>
        </h2>

        <h2 className="text-xl text-gray-200">Nota: " {nota} "</h2>
      </div>
    </div>
  );
};

export default EmailComponent;
