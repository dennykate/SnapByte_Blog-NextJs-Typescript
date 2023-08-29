"use client";


import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import { store } from "@/redux/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



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
