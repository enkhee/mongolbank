import { getAllProducts, getSingleProduct } from "@/utils/products";

import ProductDetail from "@/components/product/productDetail";
type Props = {
  params: { productId: string };
};

const fetchProductdata = async (productId: string) => {
  const productsData = await getSingleProduct(`${productId}`);
  return productsData;
};

export const generateStaticParams = async () => {
  try {
    const productsAll = await getAllProducts();
    const params = productsAll.map((product: any) => {
      return { productId: product.id.toString() };
    });
    return params || [];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`product fetch error: ${error.message}`);
    } else {
      throw new Error("product fetch error");
    }
  }
};

export default async function Page({ params }: Props) {
  const { productId } = params;
  const product = await fetchProductdata(productId);

  return (
    <div>
      <section>
        <ProductDetail product={product} />
      </section>
    </div>
  );
}
