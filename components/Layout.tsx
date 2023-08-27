import React from "react";

import { Footer, Guard, Navbar } from ".";
import { LayoutProps } from "@/types";

const Layout = ({ children, profile }: LayoutProps) => {
  return (
    <Guard>
      <div className="w-full min-h-screen flex flex-col justify-between items-start ">
        <Navbar />

        <div className="w-full">
          <div
            className={` max-w-[1024px] mx-auto md:mt-0 mt-[60px] ${
              !profile && "sm:px-4 px-0"
            } `}
          >
            {children}
          </div>
        </div>

        <Footer />
      </div>
    </Guard>
  );
};

export default Layout;
