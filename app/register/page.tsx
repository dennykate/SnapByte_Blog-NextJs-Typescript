"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Input, FileInput, AuthGuard } from "@/components";
import { useRegisterMutation } from "@/redux/api/authApi";

const Page = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [name, setName] = useState<string>("Thwe Thw");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPassword_confirmation] =
    useState<string>("");
  const [profile, setProfile] = useState<string>("");
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (profile == "") {
      return toast.error("profile image is required");
    }

    const user = { name, email, password, password_confirmation, profile };

    const { data, error }: any = await register(user);

    console.log(error);

    if (data?.success) {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      toast.error("register fail");
    }
  };

  return (
    <AuthGuard>
      <div className="w-full min-h-screen py-5 flex justify-center items-center sm:px-0 px-1 ">
        <div className="max-w-[500px]  sm:px-5 px-3 py-5 border  flex-1 ">
          <form onSubmit={onSubmitHandler}>
            <h1 className="text-2xl  font-bold text-center">Register Form</h1>
            <div className="my-5 w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src={
                  profile
                    ? profile
                    : "https://i.postimg.cc/ncpSdTTY/avatar-svgrepo-com.png"
                }
                width={1280}
                height={1280}
                alt="thumbnail"
                priority
              />
            </div>
            <Input
              type="text"
              label="Your Name"
              placeholder="Denny Kate"
              value={name}
              setValue={setName}
            />
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
            <Input
              type="password"
              label="Confirm Password"
              placeholder="user12345"
              value={password_confirmation}
              setValue={setPassword_confirmation}
            />
            <FileInput setValue={setProfile} />
            <div className="flex items-start mb-3">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
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
              Have already an account ?{" "}
              <Link href="/login" className="text-blue-400 underline">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Page;
