import { Checkout } from "@/components/Checkout";
import Image from "next/image";
import { stringify } from "querystring";

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
  const data = await getProducts();

  return (
    <div className="mx-auto mt-[116px] grid grid-cols-4 md:max-w-[938px]">
      {data.products.map((res: any) => {
        return (
          <div key={res.id} className="h-[285px] md:w-[218px] shadow-mk-shadow">
            {res.id}
          </div>
        );
      })}
    </div>
  );
}
