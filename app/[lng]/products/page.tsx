"use client";

import { useEffect, useState } from "react";
import { getLimitProducts } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import ProductBox from "@/components/product/productBox";
type Product = any;
export default function Products() {
  const [products, setProducts] = useState<Product[] | any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await fetch("/api/products?limit=12");
        const data = await productsData.json();
        setProducts(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            {isLoading && <>Уншиж байна....</>}
            {!isLoading &&
              products &&
              products.map((product: any, index: number) => {
                return <ProductBox productDetail={product} key={index} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
