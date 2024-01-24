"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
export default function Contact() {
  const search = useSearchParams();
  const limit = search.get("limit");
  console.log(limit);
  const router = useRouter();

  if (limit == "100") {
    redirect("/");
  }
  const handleClick = () => {
    console.log("Test");
    router.replace("/news", { scroll: true });
  };

  return (
    <>
      Холбоо барих
      <button onClick={handleClick} className={"btn btn-dark"}>
        Нүүр
      </button>
    </>
  );
}
