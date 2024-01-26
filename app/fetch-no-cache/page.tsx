import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
async function ProductQuantity() {
  noStore();
  const response = await fetch(`https://fakestoreapi.com/products/1`);
  const product = await response.json();
  return <h1>{product?.title}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <Suspense fallback={<div>Уншиж байна...</div>}>
        <ProductQuantity />
      </Suspense>
    </section>
  );
}
