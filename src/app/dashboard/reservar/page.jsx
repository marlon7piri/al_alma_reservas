import React from "react";
import styles from "./Page.module.css";
import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function Reservar() {
  return (
   
      <section className={styles.fondo_home}>
        <div className="w-full  flex justify-center items-center flex-col gap-14">
          <h1 className="text-[100px] font-bold text-slate-900 border ">Al Alma Cafe</h1>
          <Link href="/dashboard/new" className="bg-[#006266] px-6 py-4 rounded-md text-slate-50 font-bold hover:bg-slate-50 hover:text-[#006266] transition duration-500">
            Hacer Reservacion
          </Link>
        </div>
      </section>
    
  );
}
