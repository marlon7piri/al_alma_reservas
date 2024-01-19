"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardReserva.module.css";
import {
  deleteReserveControllers,
  getReservas,
} from "@/app/controllers/reservas";
import { Filtros } from "./Filtros";

export default function ListReservas({ data }) {
  const [tablareservas, setTablareservas] = useState(data);
  const [reservas, setReservas] = useState(data);
  const [comensales, setComensales] = useState(null);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const fechaActual = new Date().toISOString().split("T")[0];

    setFecha(fechaActual);
  }, []);

  const deletereserva = async (id) => {
    const res = await deleteReserveControllers(id);
    if (res.status !== 200) {
      alert("algo mal");
    } else {
      const result = reservas.filter((e) => e._id !== res.data._id);
      setReservas(result);
    }
  };

  return (
    <>
      <div>
        <Filtros
          tablareservas={tablareservas}
          setFecha={setFecha}
          fecha={fecha}
          setComensales={setComensales}
          comensales={comensales}
          setReservas={setReservas}
        />
      </div>
      <div className={styles.card_container}>
        {reservas.length === 0 ? (
          <h1 className="text-3xl text-bold text-center">
            No hay reservas para esta fecha
          </h1>
        ) : (
          reservas?.map((e) => {
            return (
              <div key={e._id} className={styles.card_reservas}>
                <div className="flex  justify-between items-center gap-2">
                  <p className="uppercase">{e.nombre}</p>
                  <Image
                    src="/images/svgs/delete.svg"
                    alt="una imagen"
                    width={40}
                    height={40}
                    onClick={() => deletereserva(e._id)}
                    className="block p-2 rounded-md bg-red-500 hover:bg-red-700 duration-500 transition hover:cursor-pointer"
                  />
                </div>

                <div className="flex gap-2 justify-between items-center mt-4">
                  <div className="flex gap-2 ">
                    {" "}
                    <Image
                      src="/images/svgs/calendar.svg"
                      width={24}
                      height={24}
                      alt="un icono de un calendario"
                    />{" "}
                    <p>{e.fecha}</p>
                  </div>
                  <div>
                    <Link href={`/sedes/editar/${e._id}`}>
                      <Image
                        src="/images/svgs/edit.svg"
                        width={40}
                        height={40}
                        className="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 duration-500 transition z-50"
                        alt="un icono de un lapiz"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-2">
                  {" "}
                  <Image
                    src="/images/svgs/reloj.svg"
                    width={24}
                    height={24}
                    alt="un icono de un reloj"
                  />{" "}
                  <p>{e.hora}</p>
                </div>
                <div className="flex gap-2">
                  {" "}
                  <Image
                    src="/images/svgs/usuario.svg"
                    width={24}
                    height={24}
                    alt="un icono de un usuario"
                  />{" "}
                  <p>{e.comensales}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
