"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

import { Input } from "@/components";
import { useLoginMutation } from "@/redux/api/authApi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/service/authSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const [email, setEmail] = useState<string>("tth@gmail.com");
  const [password, setPassword] = useState<string>("11223344");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = { email, password };

    const { data }: any = await login(user);

    if (data?.success) {
      toast.success(data?.message);
      dispatch(addUser(data));

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error("email or password wrong");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center sm:px-0 px-1">
      <div className="max-w-[500px]  sm:px-5 px-3 py-5 border  flex-1 ">
        <form onSubmit={onSubmitHandler}>
          <h1 className="text-2xl mb-5 font-bold text-center">Login Form</h1>
          <Input
            type="email"
            label="Your Email"
            placeholder="user@gmail.com"
            value={email}
            setValue={setEmail}
          />
          <Input
            type="password"
            label="Your Password"
            placeholder="user12345"
            value={password}
            setValue={setPassword}
          />

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none mt-5
             focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
          >
            {isLoading ? (
              <BiLoaderAlt className="text-base animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
          <p className="text-sm mt-3 text-black">
            Don't have an account yet ?{" "}
            <Link href="/register" className="text-blue-400 underline">
              register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
