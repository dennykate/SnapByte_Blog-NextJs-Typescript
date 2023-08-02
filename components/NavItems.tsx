import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { navItems } from "@/constants";
import { NavItemsProps, NavItemProps } from "@/types";
import { logout } from "@/utils";

const NavItems = ({ column }: NavItemsProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <ul
      className={`font-medium flex items-start gap-2 ${
        column ? "flex-col" : "flex-row"
      }`}
    >
      {navItems.map(({ title, path }: NavItemProps, index) => (
        <li key={index}>
          <button
            onClick={() => router.push(path)}
            className="block py-2 pl-3 pr-4  text-black hover:text-blue-700 hover:underline"
            aria-current="page"
          >
            {title}
          </button>
        </li>
      ))}
      
      <li>
        <button
          onClick={() => logout(router, dispatch)}
          className="block py-2 pl-3 pr-4  text-black hover:text-blue-700 hover:underline"
          aria-current="page"
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavItems;
