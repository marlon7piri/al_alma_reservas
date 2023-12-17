import axios from "axios";

const url = 'https://al-alma-reserva.vercel.app/api'
export const getASedesControllers = async (id) => {
  const res = await axios.get(`${url}/sedes/${id}`);
  return res;
};

/* export const  getSedes = async () =>{
 
  const res = await fetch(`${process.env.NEXT_URL}/sedes`,{cache:'no-cache'})
   return res.json()
 
}; */
