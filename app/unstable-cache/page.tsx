import { getProducts } from "@/utils/products";

async function ProductQuantity() {
  const response = await getProducts(10);
  return <h1>{response[0]?.title}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <ProductQuantity />
    </section>
  );
}
