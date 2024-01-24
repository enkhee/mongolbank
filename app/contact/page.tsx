"use client";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
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
