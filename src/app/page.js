import React from "react";
import  Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-sky-500 flex flex-col justify-center items-center gap-4">
      <h1 className="text-center text-gray-50 text-3xl">Home page</h1>

      <Link href="/dashboard" className="btn">
      Dashboard
          </Link>
    </main>
  );
}
