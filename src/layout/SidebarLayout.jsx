import React from "react";
import Navbar from "../components/Navbar";
import SideBarMenu from "../components/SideBarMenu";

const SidebarLayout = ({children}) => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex ">
          <div className="w-[17%] border-r border-gray-300 print:hidden">
            <SideBarMenu />
          </div>
          <div className="p-6 w-full ">
               {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
