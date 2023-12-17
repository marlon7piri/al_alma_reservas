'use client'

import { usePathname, useSearchParams,useRouter } from "next/navigation";
import Link from "next/link"
import React from "react";

 function SearchEmpleados({ placeholder }) {
  const searchparams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handlerChange=(e)=>{
    const params = new URLSearchParams(searchparams)

    if(e.target.value){

        params.set("query",e.target.value)
        
    }else{
        params.delete("query")
    }
    replace(`${pathname}?${params}`)
  }

  return( 
    <div>
        <input type="text" onChange={handlerChange} placeholder={placeholder} />
        <Link href="/dashboard/empleados/nuevo">Nuevo Usuario</Link>
    </div>
  );
}
export default SearchEmpleados;
