"use client";
import { ButtonBuy } from "@/components/ButtonBuy/ButtonBuy";
import { Checkout } from "@/components/Checkout";
import { GetProducts } from "@/components/GetProducts";
import { ProductsProps } from "@/types/ProductType";
import Image from "next/image";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto mt-[116px] grid grid-cols-4 gap-6 max-w-[980px]">
        <GetProducts />
      </div>
    </QueryClientProvider>
  );
}
