import React from "react";
import styles from "./Page.module.css";
import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function Reservar() {
  return (
   
      <section className={styles.fondo_home}>
        <div className="w-full  flex justify-center items-center flex-col gap-14">
          <h1 className="text-6xl font-black text-gray-900">Al Alma Cafe</h1>
          <Link href="/dashboard/new" className="btn">
            Hacer Reservacion
          </Link>
        </div>
      </section>
    
  );
}
