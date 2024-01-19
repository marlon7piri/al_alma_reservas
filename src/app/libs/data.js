import { Reservas, Sedes, User } from "./models";
import { connectDb } from "./utils";

export const fetchUser = async () => {
  try {
    connectDb();
    const allusers = await User.find({});
    return allusers;
  } catch (error) {
    console.log(error)
   throw new Error("Failed to fetch users desde el backend"); 
  }
};

export const fetchSedes = async () => {
    try {
      connectDb();
      const sedes = await Sedes.find({});
      
      return sedes;
    } catch (error) {
      throw new Error("Failed to fetch sedes");
    }
  };
  

  export const fetchReservas = async () => {
    try {
      connectDb();
      const reservas = await Reservas.find({});
      return reservas;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch reservas");
    }
  };


 


