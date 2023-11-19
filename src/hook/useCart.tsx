"use client";
import { ProductsProps } from "@/types/ProductType";
import { create } from "zustand";

type MyState = {
  products: ProductsProps[];
  addProduct: (newProduct: ProductsProps) => void;
};

export const useCart = create<MyState>((set) => ({
  products: [],
  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
}));
