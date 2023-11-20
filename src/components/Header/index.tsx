"use client";
import { useCart } from "@/hook/useCart";
import Image from "next/image";
import React from "react";
export function Header() {
  const { products, toggleStateCart } = useCart();
  return (
    <header className="h-12 lg:h-[100px] flex items-center justify-center w-full bg-standardBlue px-4">
      <div className=" w-full flex items-center justify-between lg:max-w-[1440px]">
        <div className="flex items-center text-white">
          <span className="font-semibold leading-5 text-xl lg:text-[40px]  ">
            MKS
          </span>
          <span className="mt-3 font-extralight ml-2  lg:text-xl sm:text-base  ">
            Sistemas
          </span>
        </div>
        <button
          className="flex items-center justify-center gap-2 border w-14 h-[26px] lg:max-w-[90px] lg:h-[45px]  rounded-2xl bg-white  "
          onClick={() => toggleStateCart(true)}
        >
          <Image
            width={18}
            height={18}
            alt="Carrinho de compra"
            src="/assets/cart.svg"
          />
          <span className="font-bold">{products.length}</span>
        </button>
      </div>
    </header>
  );
}
