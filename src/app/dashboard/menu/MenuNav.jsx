"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuNav() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard/menu/entradas",
      label: "Entradas",
    },
    {
      href: "/dashboard/menu/principales",
      label: "Principales",
    },
    {
      href: "/dashboard/menu/postres",
      label: "Postres",
    },
  ];
  return (
    <ul className="flex justify-center items-center gap-4 bg-gray-900 p-4 w-full">
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={`${
              pathname == link.href
                ? "underline text-gray-50  text-xl font-medium"
                : "text-gray-50 text-xl font-medium"
            }`}
           key={link.label}>
            {link.label}
          </Link>
        );
      })}
    </ul>
  );
}

export default MenuNav;
