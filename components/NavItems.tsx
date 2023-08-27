import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { navItems } from "@/constants";
import { NavItemsProps, NavItemProps, UserInfoProps } from "@/types";

const NavItems = ({ column }: NavItemsProps) => {
  const user: UserInfoProps = JSON.parse(Cookies.get("user") ?? "{}");

  const router = useRouter();

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
          onClick={() => router.push(`/profile/${user.id}`)}
          className="block py-2 pl-3 text-black hover:text-blue-700 hover:underline"
          aria-current="page"
        >
          Profile
        </button>
      </li>
    </ul>
  );
};

export default NavItems;
