import React from "react";
import  MenuNav  from "./MenuNav";

export default function layout({ children }) {
  return (
    <div>
      <MenuNav />
      {children}
    </div>
  );
};
