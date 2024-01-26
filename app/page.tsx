"use client";

import { useData } from "@/contexts/dataContext";
import { useEffect } from "react";

export default function Home() {
  const { storage, setValues } = useData();

  useEffect(() => {
    setValues({ name: "enkhbayar" });
  }, []);

  console.log("hog dayta", storage);

  return <div>my first page</div>;
}
