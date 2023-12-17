"use client";

import React, { useState } from "react";
import styles from "./formulario.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createReservaControllers } from "@/app/controllers/reservas";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isloading, setIsloading] = useState(false);
  const router = useRouter();

  const createReserva = async (data) => {
    const { comensales } = data;

    try {
      setIsloading(true);
      const result  = await createReservaControllers(data)

      console.log(result);
      setIsloading(false);
      router.push("/sedes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(createReserva)} className={styles.form}>
      <input
        type="text"
        placeholder="Nombre..."
        {...register("nombre", {
          required: true,
        })}
      />
      <input
        type="date"
        placeholder="Fecha..."
        {...register("fecha", {
          required: true,
        })}
      />
      <input
        type="time"
        placeholder="Hora..."
        {...register("hora", {
          required: true,
        })}
      />
      <input
        type="number"
        placeholder="Comensales..."
        {...register("comensales", {
          required: true,
        })}
      />
      <select name="" id="" {...register("sede")}>
        <option value="casco">Casco</option>
        <option value="san francisco">San francisco</option>
      </select>
      <input type="submit" value={isloading ? "creando..." : "Crear"} />
    </form>
  );
};

export default Formulario;
