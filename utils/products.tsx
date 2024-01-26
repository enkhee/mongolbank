import { unstable_cache } from "next/cache";

export async function getLimitProducts(limit: number) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}

export const getProducts = unstable_cache(
  async (limit: number) => {
    return await getLimitProducts(limit);
  },
  ["product_limit"],
  { tags: ["product_limit"], revalidate: 60 },
);

export async function getSingleProduct(id: any) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}
