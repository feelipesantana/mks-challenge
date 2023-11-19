import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
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
      <body className={montSerrant.className}>
        <Checkout />
        <Header />

        {children}
      </body>
    </html>
  );
}
