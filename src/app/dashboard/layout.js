import React from "react";
import Aside from "../components/Aside";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-scroll">
      <Aside />
      <div className="layout overflow-scroll  w-full h-full  shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
