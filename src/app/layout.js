import Aside from "./components/Aside";
import Nav from "./components/Nav";
import "./globals.css";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata = {
  title: "al-alma reservas",
  description: "app de reservas del restaurante al-alma",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={monserrat.className}>{children}</body>
    </html>
  );
}
