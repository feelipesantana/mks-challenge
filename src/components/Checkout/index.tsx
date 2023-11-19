"use client";
import { motion } from "framer-motion";
import { useCart } from "../../hook/useCart";
import Image from "next/image";

export function Checkout() {
  const {
    products,
    stateCart,
    toggleStateCart,
    removeProduct,
    addUpdateProduct,
    subtractUpdateProduct,
  } = useCart();

  const total = products.reduce(
    (accumulator, product) =>
      accumulator + product.quantity * Number(product.price),
    0
  );

  return (
    <motion.div
      className={`${
        !stateCart ? "hidden" : "flex flex-col"
      } carrinho absolute h-screen right-0 max-w-[486px] w-full bg-standardBlue `}
      initial={{ x: "100%" }}
      animate={{ x: stateCart ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-between items-start pt-[36px] px-[47px]">
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

      <div className="mt-16 flex flex-1 flex-col gap-4 px-[47px] overflow-y-auto">
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
                  <button onClick={() => subtractUpdateProduct(res.id)}>
                    -
                  </button>
                  <p>{res.quantity}</p>
                  <button onClick={() => addUpdateProduct(res.id)}>+</button>
                </div>
              </div>
              <span className="font-bold text-black text-[14px]">
                R$ {res.price}
              </span>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between mb-10 px-[47px] text-white font-bold text-[28px]">
          <span>Total:</span>
          <span>R$ {total},00</span>
        </div>
        <button className=" h-[97px] w-full text-[28px] font-bold text-white bg-black">
          Finalizar Compra
        </button>
      </div>
    </motion.div>
  );
}
