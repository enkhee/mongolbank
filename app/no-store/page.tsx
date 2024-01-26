import { Suspense } from "react";
import { getProducts } from "@/utils/products";
async function Products() {
  const response = await getProducts(10);
  return (
    <ul>
      {response.map((product: any) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <Suspense fallback={<div>Уншиж байна...</div>}>
        <Products />
      </Suspense>
    </section>
  );
}
