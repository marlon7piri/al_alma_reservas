"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GraficaReservas() {
  const data = [
    {
      name: "Lunes",
      visit: 4000,
      click: 2400,
      amt: 2400,
    },
    {
      name: "Martes",
      visit: 3000,
      click: 1398,
      amt: 2210,
    },
    {
      name: "Miercoles",
      visit: 2000,
      click: 9800,
      amt: 2290,
    },
    {
      name: "Jueves",
      visit: 2780,
      click: 3908,
      amt: 2000,
    },
    {
      name: "viernes",
      visit: 1890,
      click: 4800,
      amt: 2181,
    },
    {
      name: "Sabado",
      visit: 2390,
      click: 3800,
      amt: 2500,
    },
    {
      name: "Domingo",
      visit: 3490,
      click: 4300,
      amt: 2100,
    },
  ];

  return (
    <section className="w-full h-full bg-gray-900 p-4">
      <h1 className="text-center text-gray-50 text-3xl font-bold"> Grafica Reservas</h1>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip  contentStyle={{background:"black"}}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
