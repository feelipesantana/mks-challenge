"use client";
import { GetProducts } from "@/components/GetProducts";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[980px]">
        <GetProducts />
      </div>
    </QueryClientProvider>
  );
}
