"use client";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [count, setCount] = useState(0);
  return (
    <header className="h-[101px] flex items-center justify-center w-full bg-standardBlue">
      <div className="md:max-w-[1440px] sm:max-w-[375px] w-full flex items-center justify-between">
        <div className="flex items-center text-white">
          <span className="font-semibold leading-5 md:text-[40px] sm:text-xl ">
            MKS
          </span>
          <span className="mt-3 font-extralight ml-2  md:text-xl sm:text-base  ">
            Sistemas
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 border w-full h-[45px] md:max-w-[90px] rounded-2xl bg-white  ">
          <Image
            width={18}
            height={18}
            alt="Carrinho de compra"
            src="/assets/cart.svg"
          />
          <span className="font-bold">{count}</span>
        </div>
      </div>
    </header>
  );
}
