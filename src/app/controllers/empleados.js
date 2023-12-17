import axios from "axios";
const url = "https://api-alalma.vercel.app"
const urljsonplaceholder = "https://jsonplaceholder.typicode.com/users"
export const getUsuariosControllers = async(q) => {
  console.log(q)
  const regex = new RegExp(q,"i")

  console.log(regex)
  const res = await axios.get(`${url}/reservas?nombre=${regex}`);
  return res;
};
