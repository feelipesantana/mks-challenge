import { ProductsProps } from "@/types/ProductType";
import Image from "next/image";
import { useQuery } from "react-query";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface DataProps {
  products: Array<ProductsProps>;
  count: number;
}

export async function fetchProducts() {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=12&sortBy=id&orderBy=DESC"
  );
  if (!res.ok) {
    throw new Error("Falha ao realizar o fetch de dados");
  }

  return res.json() as Promise<{ products: ProductsProps[]; count: number }>;
}
export function GetProducts() {
  const { isLoading, isError, data, error } = useQuery<DataProps>(
    "products",
    fetchProducts
  );

  if (isLoading) {
    return (
      <>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full md:min-h-[285px] md:max-w-[218px] shadow-mk-shadow rounded-xl"
          >
            <div className="max-w-[171px] max-h-[138px] mx-auto mt-[18px]">
              <Skeleton height={138} width={171} />
            </div>
            <div className="flex flex-col px-[14px] mt-[14px]">
              <div className="flex items-center justify-between">
                <Skeleton height={20} width={120} />
                <Skeleton height={20} width={60} />
              </div>
              <Skeleton count={2} height={15} />
            </div>
            <Skeleton height={40} style={{ margin: "10px auto" }} width={120} />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {data?.products.map((res) => {
        return (
          <div
            key={res.id}
            className="mx-auto flex flex-col justify-between w-[250px] md:min-h-[285px] md:max-w-[218px] shadow-mk-shadow rounded-xl"
          >
            <div className="min-w-[130px] min-h-[160px] md:max-w-[171px]  md:max-h-[138px] mx-auto mt-[18px]">
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
    </>
  );
}
