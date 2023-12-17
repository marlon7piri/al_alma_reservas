"use client";

import React  from "react";
import Image from "next/image";

import Link from "next/link";

function Nav() {
  return (
    <section className="bg-gray-50 w-full  flex justify-between p-4 items-center">
      (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="btn_hambuerguesa font-black"
       
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M18 6L6 18"
            stroke="#222222"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M6 6L18 18"
            stroke="#222222"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
      )
      <Link href="/" className="ml-10">
        <Image src="/images/logo_H&M.png" width={64} height={64}  alt="unn logo de h&m"/>
      </Link>
      <ul className="flex gap-4 mr-10 text-[#011D21] justify-center items-center text-xl">
        <div
          onClick={() => alert("abriendo las nuevas reservas")}
          className=" p-4 hover:cursor-pointer hover:rotate-12 duration-500"
        >
          {" "}
          <Image src="/images/svgs/bell.svg" width={24} height={24} alt="unn logo de una campana"/>
        </div>

        
      </ul>
    </section>
  );
}

export default Nav;
