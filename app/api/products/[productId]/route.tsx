type Props = {
  params: { productId: string };
};
export async function GET(request: Request, { params }: Props) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`,
  );
  const data = await res.json();
  return Response.json({ data });
}
