import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Хуудас олдсонгүй</p>
      <p>
        <Link href="/public">Нүүр</Link>
      </p>
    </div>
  );
}
