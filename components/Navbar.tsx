"use client";

import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <nav className="w-full md:static fixed top-0 left-0">
      <div
        className=" max-w-[1024px] mx-auto bg-white flex items-center justify-between h-[60px] sm:px-4 px-2 
      z-10"
      >
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black sm:block hidden">
            Next Blog
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <NavItems />
        </div>

        <button
          onClick={() => setShowNavbar(!showNavbar)}
          className="md:hidden block"
        >
          {showNavbar ? (
            <FaXmark className="text-xl" />
          ) : (
            <HiMenuAlt1 className="text-xl" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden block absolute top-[60px] left-0 w-full py-10 px-2 bg-white bg-opacity-20 backdrop-blur-lg
      ${
        showNavbar ? "translate-y-0" : "-translate-y-[200%]"
      } transition-all duration-300 ease-in-out -z-10`}
      >
        <NavItems column />
      </div>
    </nav>
  );
};

export default Navbar;
