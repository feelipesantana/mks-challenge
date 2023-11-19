import { ButtonBuy } from "@/components/ButtonBuy/ButtonBuy";
import { Checkout } from "@/components/Checkout";
import { ProductsProps } from "@/types/ProductType";
import Image from "next/image";
import { stringify } from "querystring";

interface DataProps {
  products: Array<ProductsProps>;
  count: number;
}
async function getProducts() {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=12&sortBy=id&orderBy=DESC"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data: DataProps = await getProducts();

  return (
    <div className="mx-auto mt-[116px] grid grid-cols-4 gap-6 max-w-[980px]">
      {data.products.map((res) => {
        return (
          <div
            key={res.id}
            className="flex flex-col justify-between w-full md:min-h-[285px] md:max-w-[218px] shadow-mk-shadow rounded-xl"
          >
            <div className="max-w-[171px]  max-h-[138px] mx-auto mt-[18px]">
              <Image
                src={res.photo}
                width={0}
                height={0}
                sizes="100%"
                alt="Imagem do produto"
                className="w-full h-full    "
              />
            </div>
            <div className="flex flex-col px-[14px] mt-[14px]">
              <div className="flex items-center justify-between">
                <h3 className="col-span-2 font-normal text-base leading-5 text-gray-600 ">
                  {res.name}
                </h3>
                <span className="whitespace-nowrap items-center justify-center bg-gray-500 text-white font-bold text-[15px] leading-[15px] h-7 rounded-lg p-1">
                  R$ {res.price}
                </span>
              </div>
              <span className="font-light text-[10px] mt-2 mb-[12px]">
                Redesigned from scratch and completely revised.
              </span>
            </div>
            <ButtonBuy productData={res} />
          </div>
        );
      })}
    </div>
  );
}
