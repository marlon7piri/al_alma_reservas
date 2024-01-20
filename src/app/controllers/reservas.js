import axios from "axios";
import { useRouter } from "next/navigation";
import { ApiUrl } from "../libs/ApiUrl";



export const getReservas = async () => {
  const result = await fetch(`${ApiUrl}/reservas`, {
    cache: "no-cache",
  });
 return  result
  
};

export const createReservaControllers = async (newreserva) => {
  const res = await axios.post(`${ApiUrl}/reservas`, newreserva);
  return res;
};

export const updateReserveControllers = async (id, body) => {
  const res = await axios.put(`${ApiUrl}/reservas/${id}`, body);
  return res;
};

export const deleteReserveControllers = async (id) => {
  const res = await axios.delete(`${ApiUrl}/reservas/${id}`);
  return res;
};
