"use client";

import React from "react";

import Layout from "@/app/components/Layout";
import { useForm } from "react-hook-form";

function NuevoEmpleado() {
  const { register, handleSubmit,formState:{errors} } = useForm();

  const Enviar = (data) => {
    console.log(typeof(data.isAdmin));
  };
  return (
    <Layout>
      <form
        onSubmit={handleSubmit(Enviar)}
        className=" w-full h-full flex justify-center items-center flex-col gap-2 bg-gray-900 text-gray-700 font-bold"
      >
        <div className="w-full h-full flex  justify-between  gap-4">
          <div className="bg-gray-200 w-full flex flex-col gap-2 p-2">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre...."
              {...register("name",{ required:"El nombre es requerido"})}
            />
             {errors && (<span className="text-red-500">{errors.name?.message}</span>)}
            <label>Email</label>
            <input type="text" placeholder="Email...." {...register("email",{ required:"El email es requerido"})} />
            {errors && (<span  className="text-red-500">{errors.email?.message}</span>)}
            <label>Telefono</label>
            <input
              type="number"
              placeholder="Telefono...."
              {...register("phone",{ required:"El telefono es requerido"})}
            />
             {errors && (<span  className="text-red-500">{errors.phone?.message}</span>)}
            <input
              type="submit"
              value="Crear"
              className="bg-gray-900 px-4 py-2 rounded-sm text-gray-50 w-max mt-4"
            />
          </div>
          <div className="bg-gray-200 w-full flex flex-col gap-2 p-2">
            <label>Direccion</label>
            <input type="text" placeholder="Direccion...." {...register("address",{required:"la direccion es requerida"})}/>
            {errors && (<span  className="text-red-500">{errors.address?.message}</span>)}
           
            <label>Rol</label>
            <select name="" id="" {...register("isAdmin" ,{required:"rol  requerido"})}>
              <option value=""></option>
              <option value="true">Administrador</option>
              <option value="false">Salonero</option>
            </select>
            {errors && (<span  className="text-red-500">{errors.isAdmin?.message}</span>)}
            <label>Status</label>
            <select name="" id="" {...register("isActive" ,{required:"Status  requerido"})}>
              <option value=""></option>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
            {errors && (<span  className="text-red-500">{errors.isActive?.message}</span>)}
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default NuevoEmpleado;
