type Props = {
  params: { reviewsId: string };
};
export default function ReviewsDetail({ params }: Props) {
  return <div>reviews detail page {params.reviewsId}</div>;
}
