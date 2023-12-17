
import React from "react";

import  ListEmpleados  from "./ListEmpleados";
import Layout from "@/app/components/Layout";
import SearchEmpleados from "./SearchEmpleados";

import { fetchUser } from "../../libs/data";

 async function Empleados(/* {searchParams} */) {
  /* const q = searchParams?.query || ""
  console.log(q) */

  const data = await fetchUser();

  return (
    <div>
      <SearchEmpleados placeholder="Buscar un empleado..."/>
      <ListEmpleados data={data}/>
    </div>
  );
}

export default Empleados;
