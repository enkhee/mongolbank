"use client";

import { useEffect, useState } from "react";
import { getLimitProducts } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
type Product = any;
export default function Products() {
  const [products, setProducts] = useState<Product[] | any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      // try {
      const productsData = await fetch("/api/products?limit=12");
      const data = await productsData.json();
      setProducts(data?.data);
      setIsLoading(false);
      // } catch (error) {
      //   setIsLoading(false);
      //   console.error("Failed to fetch products:", error);
      // }
    }

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            {isLoading && <>Уншиж байна....</>}
            {!isLoading &&
              products &&
              products.map((product: any, index: number) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-4 mb-md-0" key={index}>
                    <div className="card">
                      <div className="d-flex justify-content-between p-3">
                        <p className="lead mb-0">
                          <Link href={`/products/${product?.id}`}>
                            {product?.title}
                          </Link>
                        </p>
                        <div
                          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                          style={{ width: "35px", height: "35px" }}
                        >
                          <p className="text-white mb-0 small">x3</p>
                        </div>
                      </div>
                      <Image
                        src={product?.image}
                        alt={product?.title}
                        width={300}
                        height={350}
                        className="card-img-top"
                        blurDataURL={product?.image}
                        placeholder="blur" // Optional blur-up while loading
                        priority
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="small">
                            <a href="#!" className="text-muted">
                              {product?.category}
                            </a>
                          </p>
                          <p className="small text-danger">
                            <s>{product?.price}</s>
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">Toshiba B77</h5>
                          <h5 className="text-dark mb-0">$1299</h5>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <p className="text-muted mb-0">
                            Available:{" "}
                            <span className="fw-bold">
                              {product?.rating?.rate}
                            </span>
                          </p>
                          <div className="ms-auto text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
