"use client";

import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Aside() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "/images/svgs/store.svg",
    },
    {
      label: "Reservar",
      href: "/dashboard/reservar",
      icon: "/images/svgs/notebook.svg",
    },
    {
      label: "Sedes",
      href: "/dashboard/sedes",
      icon: "/images/svgs/store.svg",
    },
    {
      label: "Empleados",
      href: "/dashboard/empleados",
      icon: "/images/svgs/employee.svg",
    },
    {
      label: "Configuracion",
      href: "/dashboard/configuracion",
      icon: "/images/svgs/configuration.svg",
    },
    {
      label: "Menu",
      href: "/dashboard/menu/entradas",
      icon: "/images/svgs/notebook.svg",
    },
  ];

  const handlerClick = () => {
    setOpen(!open);
    const menu = document.getElementById("menu");
    menu.classList.toggle("open_menu");
  };

  return (
    <div className="menu_container">
      <p className="text-2xl font-bold">Al Alma Restaurante</p>
      <div className="menu" id="menu">
        {links.map((link) => {
          return (
            <Link
              href={link.href} onClick={() => handlerClick()}
              className={` text-slate-50  transition duration-300  hover:text-slate-900 ${
                pathname === link.href ? "text-slate-900" : ""
              }`}
              key={link.label}
            >
             
              <p className="">{link.label}</p>
            </Link>
          );
        })}
      </div>
      {open ? (
        <span className="menu_hamburguesa" onClick={() => handlerClick()}>
        <RxHamburgerMenu  className="text-slate-50 font-bold text-2xl"/>
        </span>
      ) : (
        <span className="menu_hamburguesa" onClick={() => handlerClick()}>
        <MdOutlineClose className="text-slate-900 font-bold text-2xl"/>
        </span>
      )}
    </div>
  );
}

export default Aside;
