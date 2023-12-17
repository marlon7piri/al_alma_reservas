import React, { useState } from "react";
import styles from "./CardReserva.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export const Filtros = (/* { setComensales, setFecha, fecha } */) => {
  const [selectedDate, setSelectedDate] = useState("")

  
  /* const manejarFuncionCheck = (e) => {
    setComensales(e.target.value);
  };

  const handlerDate = (date) => {
    setSelectedDate(date)
    setFecha(new Date(date).toISOString().split("T")[0]);
    
  }; */
  return (
    <div className={styles.container_filtros}>
      <div className="flex gap-2 justify-center items-center ">
        <label className="font-semibold mr-2">Comensales: </label>
        <select
          name=""
          id=""
        /*   onChange={manejarFuncionCheck} */
          className="p-2 rounded-md hover:cursor-pointer"
        >
          <option value="menor"></option>
          <option value="menor">menor</option>
          <option value="mayor">mayor</option>
        </select>
      </div>

      <div className="flex gap-2 justify-center items-center my-8">
        <label className="font-semibold mr-2">Fecha:</label>
        {/*  <input type="date" value={fecha} className="p-2 rounded-md hover:cursor-pointer"  onChange={handlerDate}/> */}
        <DatePicker
         /*  onChange={handlerDate} */
          value={selectedDate}
          name="fecha"
         /*  selected={selectedDate} */
          format="yyyy-MM-dd"
          required
          className="p-2 rounded-md hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
