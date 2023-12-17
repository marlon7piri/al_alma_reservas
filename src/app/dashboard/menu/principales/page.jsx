import React from "react";
import { principales } from "@/app/contexto/data.js";

export default function Principales() {
  console.log(principales);
  return (
    <div class="p-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Producto
            </th>
            <th scope="col" class="px-6 py-3">
              Precio
            </th>

            <th scope="col" class="px-6 py-3">
              Accion
            </th>
          </tr>
        </thead>
        <tbody>
          {principales.map((e) => {
            return (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={e.id}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  
                  {e.plato}
                </th>
                <td> {e.precio}</td>

                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
