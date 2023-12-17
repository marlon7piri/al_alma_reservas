import React from 'react'
import Aside from '../components/Aside'

const Layout = ({children}) => {
  return (
    <div className=" min-h-screen flex w-full h-screen">
          
    <Aside />

    <div className="p-4 w-[90%] h-full overflow-scroll">
      <div className="layout overflow-scroll  w-[100%] h-full rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  </div>
  )
}

export default Layout