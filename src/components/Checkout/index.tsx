"use client";
import { motion } from "framer-motion";
import { useCart } from "../../hook/useCart";
import Image from "next/image";
import { useState } from "react";

export function Checkout() {
  const { products, stateCart, toggleStateCart, removeProduct } = useCart();

  const [quantidade, setQuantidade] = useState(1);

  const incrementarQuantidade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade((prevQuantidade) => prevQuantidade - 1);
    }
  };

  return (
    <motion.div
      className="carrinho absolute h-screen right-0 max-w-[486px] w-full bg-standardBlue py-[36px] px-[47px] "
      initial={{ x: "100%" }}
      animate={{ x: stateCart ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-between items-start">
        <h1 className="text-[27px] font-bold text-white">
          Carrinho de <br />
          Compra
        </h1>
        <button
          onClick={() => toggleStateCart(false)}
          className="bg-black text-white w-[38px] h-[38px] rounded-full"
        >
          {" "}
          X
        </button>
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {products.map((res) => {
          return (
            <div
              className="grid grid-cols-4 relative items-center bg-white h-[100px] px-[23px] py-[19px] rounded-lg "
              key={res.id}
            >
              <button
                onClick={() => removeProduct(res.id)}
                className="absolute flex items-center justify-center border top-[-8px] right-[-8px] rounded-full bg-black w-[18px] h-[18px] text-white text-[14px]"
              >
                X
              </button>
              <Image
                src={res.photo}
                width={46}
                height={57}
                alt="Imagem do produto"
              />
              <span>{res.name}</span>
              <div>
                <div className="flex items-center justify-between px-2 py-1 border w-[50px] rounded font-normal text-sm">
                  <button onClick={decrementarQuantidade}>-</button>
                  <p>{quantidade}</p>
                  <button onClick={incrementarQuantidade}>+</button>
                </div>
              </div>
              <span className="font-bold text-black text-[14px]">
                R$ {res.price}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
