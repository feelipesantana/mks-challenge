// ButtonBuy.test.tsx
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import * as useCartModule from "@/hook/useCart";
import { ButtonBuy } from "@/components/ButtonBuy/ButtonBuy";
import { ProductsProps } from "@/types/ProductType";

jest.mock("../hook/useCart.tsx");

describe("ButtonBuy", () => {
  test("renders the header with logo and cart button", () => {
    const mockAddProduct = jest.fn();
    const mockToggleStateCart = jest.fn();

    const mockUseCart = {
      products: [],
      toggleStateCart: mockToggleStateCart,
      addProduct: mockAddProduct,
      removeProduct: jest.fn(),
      addUpdateProduct: jest.fn(),
      subtractUpdateProduct: jest.fn(),
    };
    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    const mockProductData: ProductsProps = {
      id: "1",
      name: "Product 1",
      price: "10",
      quantity: 1,
      brand: "teste",
      description: "teste",
      photo: "teste.jpg",
      createdAt: "teste",
      updatedAt: "teste",
    };
    render(<ButtonBuy productData={mockProductData} />);

    const buyButton = screen.getByText("COMPRAR");
    fireEvent.click(buyButton);

    expect(mockAddProduct).toHaveBeenCalledWith(mockProductData);
    expect(mockToggleStateCart).toHaveBeenCalledWith(true);
  });
});
