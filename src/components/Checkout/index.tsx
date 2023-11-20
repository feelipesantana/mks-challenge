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
      } carrinho fixed w-full lg:h-screen h-full  right-0 max-w-[90%] lg:max-w-[486px] bg-standardBlue  overflow-y-auto z-50`}
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
              className="flex flex-col justify-between items-center lg:grid lg:grid-cols-4 relative lg:w-full bg-white w-[250px] px-[10px] py-[19px] rounded-lg  border mt-2 gap-4"
              key={res.id}
            >
              <button
                onClick={() => removeProduct(res.id)}
                className="absolute flex items-center justify-center text-black top-4 right-4 text-[42px] rounded-full lg:bg-black w-[18px] h-[18px]  lg:border lg:top-[-8px] lg:right-[-8px] lg:text-white lg:text-[14px]"
              >
                X
              </button>
              <div>
                <Image
                  src={res.photo}
                  width={80}
                  height={90}
                  alt="Imagem do produto"
                  className=" w-full"
                />
              </div>
              <span className=" text-base my-[10px]">{res.name}</span>
              <div className="flex flex-row  justify-between w-full items-center ">
                <div className="flex items-center justify-between gap-2 px-2 py-1 border w-[80px] text-xl lg:w-[50px] rounded font-normal lg:text-sm">
                  <button onClick={() => subtractUpdateProduct(res.id)}>
                    -
                  </button>
                  <p className="">{res.quantity}</p>
                  <button onClick={() => addUpdateProduct(res.id)}>+</button>
                </div>

                <div className=" flex-inline whitespace-nowrap font-bold text-white text-[15px] bg-gray-500 p-2  lg:bg-white lg:text-black rounded-[5px]">
                  R$ {res.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between mb-10 lg:px-[47px] px-[32px] text-white font-bold text-[28px]">
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
