async function ProductQuantity() {
  const response = await fetch(`https://fakestoreapi.com/products/1`);
  const product = await response.json();
  return <h1>{product?.title}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <ProductQuantity />
    </section>
  );
}
