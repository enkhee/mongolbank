import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import BaseLayout from "@/components/layout/baseLayout";
import "bootstrap/dist/css/bootstrap.css";

const sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Монгол банк",
  description: "Сургалтын дата",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
