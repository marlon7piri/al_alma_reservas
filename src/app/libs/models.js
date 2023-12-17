import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const SedeSchemma = new mongoose.Schema({
  capacidad: Number,
  direccion: String,
  horario: String,

  imagen: String,
  ruc: String,
  sede: String,
  telefono: String,
});

const ReservaSchema = new mongoose.Schema({
  nombre: String,
  fecha: String,
  comensales: Number,
  hora: String,
  email: String,
  nota: String,

  sede: String,
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);
export const Sedes =
  mongoose.models.Sedes || mongoose.model("Sedes", SedeSchemma);
export const Reservas =
  mongoose.models.Reservas || mongoose.model("Reservas", ReservaSchema);
