"use client";
import { create } from "zustand";
import { ProductsProps } from "@/types/ProductType";

type MyState = {
  stateCart: boolean;
  products: ProductsProps[];

  toggleStateCart: (value: boolean) => void;
  addProduct: (newProduct: ProductsProps) => void;
};

export const useCart = create<MyState>((set) => ({
  products: [],
  stateCart: false,
  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
  toggleStateCart: (value) => set((state) => ({ stateCart: value })),
}));
