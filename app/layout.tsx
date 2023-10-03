import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
// import "sweetalert2/src/sweetalert2.scss";
import { Main } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snap Byte | Blog",
  description: "sharing yours with me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <html lang="en">
        <body suppressHydrationWarning className={inter.className}>
          {children}
          <Toaster position="bottom-center" />
        </body>
      </html>
    </Main>
  );
}
