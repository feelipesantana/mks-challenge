import { Checkout } from "@/components/Checkout";
import Image from "next/image";
import { stringify } from "querystring";

interface ProductsProps {
  id: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

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
    <div className="mx-auto mt-[116px] grid grid-cols-4 gap-4 md:max-w-[938px]">
      {data.products.map((res) => {
        return (
          <div
            key={res.id}
            className="flex flex-col items-center justify-center h-[285px] md:w-[218px] shadow-mk-shadow"
          >
            <Image
              src={res.photo}
              width={111}
              height={138}
              alt="Imagem do produto"
            />
            <h3>{res.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
