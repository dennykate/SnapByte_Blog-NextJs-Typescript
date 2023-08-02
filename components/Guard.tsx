"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { GuardProps } from "@/types";

const Guard = ({ children }: GuardProps) => {
  const router = useRouter();
  const user = Cookies.get("user");

  useEffect(() => {
    if (user == undefined) router.push("/login");
  }, []);

  return children;
};

export default Guard;
