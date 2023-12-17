

import React  from "react";


import Nav from "./Nav";
import Aside from "./Aside";

function Layout({children}) {
  

  
  return (
    <div className=" grid grid-cols-1 grid-flow-row">
      <Nav />
      <div className=" min-h-screen flex w-full h-screen">
        <Aside />

        <div className="p-4 w-[90%] h-full overflow-scroll">
          <div className="layout overflow-scroll  w-[100%] h-full rounded-2xl shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
