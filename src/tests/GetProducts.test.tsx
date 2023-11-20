import { fetchProducts } from "@/components/GetProducts";

describe("GetProducts", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("fetches products successfully", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1", price: 20.0, photo: "product1.jpg" },
      { id: 2, name: "Product 2", price: 10.0, photo: "product2.jpg" },
    ];
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ products: mockProducts, count: 2 }),
      })
    );

    const data = await fetchProducts();

    expect(data.products).toEqual(mockProducts);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test("handles fetch error", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    await expect(fetchProducts()).rejects.toThrow(
      "Falha ao realizar o fetch de dados"
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
