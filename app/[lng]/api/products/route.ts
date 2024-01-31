export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const data = await res.json();

  return Response.json({ data });
}
