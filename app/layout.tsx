"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import { store } from "@/redux/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Blog Website with Next Js and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning className={inter.className}>
          {children}
          <Toaster position="bottom-center" />
        </body>
      </html>
    </Provider>
  );
}
