"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

type Product = any;
export default function ProductDetail({ params }: Props) {
  const [product, setProduct] = useState<Product | any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const productsData = await fetch(`/api/products/${params.productId}`);
        const data = await productsData.json();
        setProduct(data?.data);
        setIsLoading(false);
        console.log(data.data);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProductDetail();
  }, [params]);

  return (
    <div>
      <section>
        <div className="container py-5">
          {isLoading && <>Уншиж байна....</>}
          {!isLoading && product ? (
            <div className="row" key={1}>
              <div className="col-md-5">
                <div className="main-img">
                  <Image
                    width={50}
                    height={50}
                    className="w-100 h-auto"
                    src={product?.image}
                    alt="ProductS"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="main-description px-2">
                  <div className="category text-bold">
                    Category: {product?.category}
                  </div>
                  <div className="product-title text-bold my-3">
                    {product?.title}
                  </div>
                  <div className="price-area my-4">
                    <p className="old-price mb-1">
                      <del>$100</del>
                      <span className="old-price-discount text-danger">
                        (20% off)
                      </span>
                    </p>
                    <p className="new-price text-bold mb-1">
                      Price: ${product?.price}
                    </p>
                    <p className="old-price mb-1">
                      Rating: rate - {product?.rating?.rate}, count -{" "}
                      {product?.rating?.count}
                    </p>
                  </div>
                  <div className="buttons d-flex my-5">
                    <div className="block">
                      <Link href="#" className="shadow btn custom-btn ">
                        Wishlist
                      </Link>
                    </div>
                    <div className="block">
                      <button className="shadow btn custom-btn">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details my-4">
                  <p className="details-title text-color mb-1">
                    Product Details
                  </p>
                  <p className="description">{product?.description}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
