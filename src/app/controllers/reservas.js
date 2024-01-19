import axios from "axios";
import { useRouter } from "next/navigation";
const url = 'https://al-alma-reserva.vercel.app/api'
const url2 = 'http://localhost:3000/api'


export const getReservas = async () => {
  const result = await fetch(`${url2}/reservas`, {
    cache: "no-cache",
  });
 return  result.json();
  
};

export const createReservaControllers = async (newreserva) => {
  const res = await axios.post(`${url2}/reservas`, newreserva);
  return res;
};

export const updateReserveControllers = async (id, body) => {
  const res = await axios.put(`${url2}/reservas/${id}`, body);
  return res;
};

export const deleteReserveControllers = async (id) => {
  const res = await axios.delete(`${url2}/reservas/${id}`);
  return res;
};
