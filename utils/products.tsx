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
