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
      <div className="menu" id="menu">
        {links.map((link) => {
          return (
            <Link
              href={link.href} onClick={() => handlerClick()}
              className={` mt-2 w-full flex gap-2 hover:bg-gray-900 duration-300  px-4 py-2 rounded-md ${
                pathname === link.href ? "bg-sky-500 text-gray-900" : ""
              }`}
              key={link.label}
            >
              <Image
                src={link.icon}
                width={24}
                height={24}
                alt="iconos del aside"
              />
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
