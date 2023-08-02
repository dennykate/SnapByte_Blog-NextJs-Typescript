import React from "react";

import { Guard, Navbar } from ".";
import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Guard>
      <div className="w-full lg:px-0 sm:px-5 px-[2px]">
        <Navbar />
        <div className=" max-w-[1024px] mx-auto md:mt-0 mt-[60px] sm:px-4 px-2 ">
          {children}
        </div>
      </div>
    </Guard>
  );
};

export default Layout;
