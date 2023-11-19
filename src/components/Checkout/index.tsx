"use client";
import { motion } from "framer-motion";
import { useCart } from "../../hook/useCart";
import React from "react";

export function Checkout() {
  const { products, stateCart } = useCart();

  return (
    <motion.div
      className="carrinho absolute h-screen border right-0 max-w-[486px] w-full bg-standardBlue py-[36px] px-[47px]"
      initial={{ x: "100%" }}
      animate={{ x: stateCart ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-between items-start">
        <h1 className="text-[27px] font-bold text-white">
          Carrinho de <br />
          Compra
        </h1>
        <button>X</button>
      </div>

      <div className="mt-16">
        {products.map((res) => {
          return (
            <div className="bg-white h-[100px]" key={res.id}>
              {res.name}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
