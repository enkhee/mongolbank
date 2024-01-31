"use client";

import { useData } from "@/contexts/dataContext";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductBox from "@/components/product/productBox";

export default function Home({ params: { lng } }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });
  console.log("lng", lng);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          {data &&
            data?.map((product: any, index: number) => {
              return <ProductBox productDetail={product} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
}
