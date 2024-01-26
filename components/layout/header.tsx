"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useData } from "@/contexts/dataContext";
import { useEffect } from "react";

export default function Header() {
  const { storage, setValues } = useData();

  useEffect(() => {
    setValues({ name: "header" });
  }, []);

  console.log("hog header", storage);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use></use>
            </svg>
            <span className="fs-4">Simple header</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                href="/"
                className={`${pathname === "/" ? "active" : ""} nav-link`}
                aria-current="page"
              >
                Нүүр
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/news"
                className={`${pathname === "/news" ? "active" : ""} nav-link`}
              >
                Мэдээ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className={`${pathname === "/products" ? "active" : ""} nav-link`}
              >
                Бараа
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`${pathname === "/about" ? "active" : ""} nav-link`}
              >
                Бидний тухай
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`${pathname === "/contact" ? "active" : ""} nav-link`}
              >
                Холбоо барих
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
