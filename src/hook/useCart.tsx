"use client";
import { create } from "zustand";
import { ProductsProps } from "@/types/ProductType";

type MyState = {
  stateCart: boolean;
  products: ProductsProps[];

  toggleStateCart: (value: boolean) => void;
  addProduct: (newProduct: ProductsProps) => void;
  removeProduct: (productId: string) => void;
};

export const useCart = create<MyState>((set) => ({
  products: [],
  stateCart: false,
  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
  toggleStateCart: (value) => set((state) => ({ stateCart: value })),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
}));
