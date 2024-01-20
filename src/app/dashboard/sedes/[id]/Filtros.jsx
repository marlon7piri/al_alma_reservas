"use client";

import React, { useState } from "react";
import styles from "./CardReserva.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";

export const Filtros = ({
  tablareservas,
  setReservas,
  setFecha,
  setComensales,
  comensales,
  fecha,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const manejarFuncionCheck = (e) => {
    setComensales(e.target.value);
    filtrarReservasPorComensales(e.target.value);
  };

  const handlerDate = (e) => {
    console.log(e.target.value);
    setFecha(new Date(e.target.value).toISOString().split("T")[0]);
    filtrarReservasPorFecha();
  };

  const filtrarReservasPorFecha = () => {
    const result = tablareservas.filter((reserva) => {
      return reserva.fecha === fecha;
    });
    setReservas(result);
    router.refresh();
  };

  const filtrarReservasPorComensales = (valor) => {
    const reservasfiltradas = tablareservas.sort((a, b) => {
      if (valor == "mayor") {
        return b.comensales - a.comensales;
      } else if (valor == "menor") {
        return a.comensales - b.comensales;
      }
    });
    setReservas(reservasfiltradas);
    router.refresh();
  };
  return (
    <div className={styles.container_filtros}>
      <div className="flex gap-2 justify-center items-center ">
        <label className="font-semibold mr-2">Comensales: </label>
        <select
          name=""
          id=""
          onChange={manejarFuncionCheck}
          className="p-2 rounded-md hover:cursor-pointer"
        >
          <option value="menor"></option>
          <option value="menor">menor</option>
          <option value="mayor">mayor</option>
        </select>
      </div>

      <div className="flex gap-2 justify-center items-center my-8">
        <label className="font-semibold mr-2">Fecha:</label>
        <input
          type="date"
          value={fecha}
          className="p-2 rounded-md hover:cursor-pointer"
          onChange={handlerDate}
        />
        {/*   <DatePicker
          onChange={handlerDate}
          value={selectedDate}
          name="fecha"
          selected={selectedDate}
          format="yyyy-MM-dd"
          required
          className="p-2 rounded-md hover:cursor-pointer"
        /> */}
      </div>
    </div>
  );
};
