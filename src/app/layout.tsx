import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Checkout } from "@/components/Checkout";

const montSerrant = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Challenge",
  description: "MKS Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montSerrant.className} lg:h-screen flex flex-col`}>
        <Checkout />

        <Header />
        <div className="flex flex-1 my-[18px] items-center justify-center">
          {children}
        </div>

        <footer className="h-[34px] lg:h-10 text-xs flex items-center justify-center bg-gray-100 text-black">
          MKS Sistemas © Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
