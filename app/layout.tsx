import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import BaseLayout from "@/components/layout/baseLayout";
import "bootstrap/dist/css/bootstrap.css";
import Providers from "@/utils/provider";

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
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
