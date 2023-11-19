"use client";
import { create } from "zustand";
import { ProductsProps } from "@/types/ProductType";

type MyState = {
  stateCart: boolean;
  products: ProductsProps[];

  toggleStateCart: (value: boolean) => void;
  addProduct: (newProduct: ProductsProps) => void;
  removeProduct: (productId: string) => void;
  addUpdateProduct: (productId: string) => void;
  subtractUpdateProduct: (productId: string) => void;
};

export const useCart = create<MyState>((set) => ({
  products: [],
  stateCart: false,

  addProduct: (newProduct) =>
    set((state) => {
      const hasProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (hasProduct) {
        const updatedProducts = state.products.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return { products: updatedProducts };
      } else {
        const productWithQuantity: ProductsProps = {
          ...newProduct,
          quantity: 1,
        };

        return { products: [...state.products, productWithQuantity] };
      }
    }),
  toggleStateCart: (value) => set((state) => ({ stateCart: value })),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),

  addUpdateProduct: (productId) =>
    set((state) => {
      const updatedProduct = state.products.map((product) =>
        product.id === productId && product.quantity <= 100
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return { products: updatedProduct };
    }),
  subtractUpdateProduct: (productId) =>
    set((state) => {
      const updatedProduct = state.products.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { products: updatedProduct };
    }),
}));
