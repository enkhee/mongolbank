"use client";

import React from "react";
import { useCartState } from "@/contexts/cart";
import Link from "next/link";
const Cart = () => {
  const { count, items } = useCartState() as any;
  console.log(items);

  return (
    <li>
      <Link href={`/cart`} className="btn btn-action">
        <i className="sk sk-cart mr-1" />
        <span>{count || 0}</span>
      </Link>
    </li>
  );
};
export default Cart;
