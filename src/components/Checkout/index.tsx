"use client";
import { useCart } from "@/hook/useCart";
import { stringify } from "querystring";

export function Checkout() {
  const { products } = useCart();

  return (
    <h1>
      {products.map((res) => {
        return res.name;
      })}
    </h1>
  );
}
