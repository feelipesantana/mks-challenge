import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("../components/GetProducts", () => ({
  GetProducts: () => <div data-testid="get-products">Mocked GetProducts</div>,
}));
describe("Home", () => {
  test("renders GetProducts component in Home", async () => {
    render(<Home />);
    expect(screen.getByTestId("get-products"));
  });
});
