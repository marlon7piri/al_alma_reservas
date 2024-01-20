import axios from "axios";
import { ApiUrl } from "../libs/ApiUrl";
const urljsonplaceholder = "https://jsonplaceholder.typicode.com/users"
export const getUsuariosControllers = async(q) => {
  console.log(q)
  const regex = new RegExp(q,"i")

  console.log(regex)
  const res = await axios.get(`${ApiUrl}/reservas?nombre=${regex}`);
  return res;
};
