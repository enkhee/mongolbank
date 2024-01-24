export async function generateMetadata({ params }) {
  return {
    title: "product" + params?.productId,
    description: " дэлгэрэнгүй" + params?.productId,
  };
}

type Props = {
  params: { productId: string };
};
export default function ProductDetail({ params }: Props) {
  return <div>Product detail page prodictId {params?.productId}</div>;
}
