// Header.test.tsx
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "@/components/Header"; // Mock da função toggleStateCart
import * as useCartModule from "@/hook/useCart";

jest.mock("../hook/useCart.tsx");

describe("Header", () => {
  test("renders the header with logo and cart button", () => {
    const mockProducts = [
      { id: "1", name: "Product 1", quantity: 2 },
      { id: "2", name: "Product 2", quantity: 1 },
    ];
    const mockUseCart = {
      products: mockProducts,
      toggleStateCart: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      addUpdateProduct: jest.fn(),
      subtractUpdateProduct: jest.fn(),
    };
    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    render(<Header />);

    expect(screen.getByText("MKS"));
    expect(screen.getByText("Sistemas"));
    expect(screen.getByAltText("Carrinho de compra"));
    expect(screen.getByText("2"));
  });
});
