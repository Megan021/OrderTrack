import React from "react";
import Navbar from "../components/Navbar";
import SideBarMenu from "../components/SideBarMenu";

const SidebarLayout = ({children}) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <div className="w-[17%] border-r border-gray-300">
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
