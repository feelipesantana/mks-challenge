// Checkout.test.tsx
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import * as useCartModule from "@/hook/useCart";
import { Checkout } from "@/components/Checkout";

jest.mock("../hook/useCart.tsx");

describe("Checkout", () => {
  test("renders the the products added on checkout", () => {
    const mockProducts = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        photo: "/product1.jpg",
        quantity: 2,
      },
      {
        id: "2",
        name: "Product 2",
        price: 15,
        photo: "/product2.jpg",
        quantity: 1,
      },
    ];
    const mockUseCart = {
      products: mockProducts,
      toggleStateCart: true,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      addUpdateProduct: jest.fn(),
      subtractUpdateProduct: jest.fn(),
    };

    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    render(<Checkout />);

    expect(screen.getByText("Carrinho de Compra"));
    expect(screen.getByText("Product 1"));
    expect(screen.getByText("Product 2"));
    expect(screen.getByText("Finalizar Compra"));
  });

  test("calculates total correctly", () => {
    const mockProducts = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        photo: "/product1.jpg",
        quantity: 2,
      },
      {
        id: "2",
        name: "Product 2",
        price: 15,
        photo: "/product2.jpg",
        quantity: 1,
      },
    ];
    const mockUseCart = {
      products: mockProducts,
      toggleStateCart: true,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      addUpdateProduct: jest.fn(),
      subtractUpdateProduct: jest.fn(),
    };
    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    render(<Checkout />);

    // Teste Calculando Total
    expect(screen.getByText("R$ 35,00"));
  });

  test("calculates quantity", () => {
    const mockProducts = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        photo: "/product1.jpg",
        quantity: 40,
      },
      {
        id: "2",
        name: "Product 2",
        price: 15,
        photo: "/product2.jpg",
        quantity: 13,
      },
    ];
    const mockUseCart = {
      products: mockProducts,
      toggleStateCart: true,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      addUpdateProduct: jest.fn(),
      subtractUpdateProduct: jest.fn(),
    };
    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    render(<Checkout />);

    // Teste Calculando Quantidades
    expect(screen.getByText("40"));
    expect(screen.getByText("13"));
  });

  test("adds and removes product quantity correctly", () => {
    const mockAddUpdateProduct = jest.fn();
    const mockSubtractUpdateProduct = jest.fn();

    const mockProducts = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        photo: "/product1.jpg",
        quantity: 4,
      },
      {
        id: "2",
        name: "Product 2",
        price: 15,
        photo: "/product2.jpg",
        quantity: 3,
      },
    ];
    const mockUseCart = {
      products: mockProducts,
      toggleStateCart: true,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      addUpdateProduct: mockAddUpdateProduct,
      subtractUpdateProduct: mockSubtractUpdateProduct,
    };
    jest.spyOn(useCartModule, "useCart").mockReturnValue(mockUseCart);

    render(<Checkout />);

    const addButton = screen.getAllByText("+")[0];
    const removeButton = screen.getAllByText("-")[0];
    fireEvent.click(addButton);
    fireEvent.click(removeButton);

    expect(mockAddUpdateProduct).toHaveBeenCalledWith("1");
    expect(mockSubtractUpdateProduct).toHaveBeenCalledWith("1");
  });
});
