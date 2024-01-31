"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useData } from "@/contexts/dataContext";
import { useEffect } from "react";
import Cart from "@/components/layout/cart";
import { useTranslation } from "@/app/i18n/client";

export default function Header({ locale }: any) {
  const { storage, setValues } = useData();
  const { t } = useTranslation(locale, "common", "");

  // server components
  //
  // import { useTranslation } from "@/app/i18n";
  //
  // export default async function About({ params: { lng } }) {
  //   const { t } = await useTranslation(lng, "common");
  //   return (
  //       <div>
  //         <h1>{t("general_footer_about")}</h1>
  //       </div>
  //   );
  // }
  //
  // client component
  //
  // "use client";
  //
  //
  // import { useTranslation } from "@/app/i18n/client";
  //
  // export default function About({ params: { lng } }) {
  //   const { t } = useTranslation(lng, "common");
  //   return (
  //       <div>
  //         <h1>{t("general_footer_about")}</h1>
  //       </div>
  //   );
  // }

  useEffect(() => {
    setValues({ name: "header" });
  }, []);

  const pathname = usePathname();

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
                {t("menu_home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/news"
                className={`${pathname === "/news" ? "active" : ""} nav-link`}
              >
                {t("menu_news")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className={`${pathname === "/products" ? "active" : ""} nav-link`}
              >
                {t("menu_product")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`${pathname === "/about" ? "active" : ""} nav-link`}
              >
                {t("menu_about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`${pathname === "/contact" ? "active" : ""} nav-link`}
              >
                {t("menu_contact")}
              </Link>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                href={`/mn`}
                className={`${pathname === "/mn" ? "active" : ""} nav-link`}
                aria-current="page"
              >
                Mongol
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/en"
                className={`${pathname === "/en" ? "active" : ""} nav-link`}
                aria-current="page"
              >
                English
              </Link>
            </li>
          </ul>
          <div className="col-xl-3 col-lg-4 col-6 order-lg-3 order-2">
            <ul className="action-list list-unstyled d-flex align-items-center justify-content-end">
              <Cart />
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
