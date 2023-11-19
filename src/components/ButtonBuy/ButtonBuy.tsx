"use client";
import { useCart } from "@/hook/useCart";
import { ProductsProps } from "@/types/ProductType";
import Image from "next/image";

interface ButtonBuyProps {
  productData: ProductsProps;
}
export function ButtonBuy({ productData }: ButtonBuyProps) {
  const { addProduct, products, toggleStateCart } = useCart();

  function handleBuy() {
    addProduct(productData);
    toggleStateCart(true);
  }
  return (
    <button
      className="font-semibold cursor-pointer h-8 bg-standardBlue flex items-center gap-[14px] justify-center text-white rounded-b-xl transaction duration-300 hover:brightness-90 "
      onClick={handleBuy}
    >
      <Image
        src="/assets/shopping-bag.svg"
        width={12}
        height={13.5}
        alt="Comprar"
        className="font-semibold"
      />
      COMPRAR
    </button>
  );
}
