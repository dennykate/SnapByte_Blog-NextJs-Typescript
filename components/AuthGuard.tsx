"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { GuardProps } from "@/types";

const AuthGuard = ({ children }: GuardProps) => {
  const router = useRouter();
  const token = Cookies.get("token");

  console.log(token);
  

  // useEffect(() => {
  //   if (token != undefined) router.push("/");
  // }, []);

  return children;
};

export default AuthGuard;
