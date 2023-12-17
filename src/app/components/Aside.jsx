"use client";

import Link from "next/link";
import React  from "react";


import Image from "next/image";
import { usePathname } from "next/navigation";

function Aside() {
 

  const pathname = usePathname();

 

  const links = [
    
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: "/images/svgs/store.svg",
      },{
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

  
  return (
    <div className="menu">
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={`w-full flex gap-2 hover:bg-gray-200 duration-300  px-4 py-2 rounded-md ${
              pathname === link.href ? "bg-red-300 text-gray-50" : ""
            }`}
          
           key={link.label}>
            <Image src={link.icon} width={24} height={24} />
            <p className="">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Aside;
