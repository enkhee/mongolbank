import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import BaseLayout from "@/components/layout/baseLayout";
import "bootstrap/dist/css/bootstrap.css";
import Providers from "@/utils/provider";
import { languages } from "@/app/i18n/settings";

const sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Монгол банк",
  description: "Сургалтын дата",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng}>
      <body className={sans.className}>
        <Providers>
          <BaseLayout locale={lng}>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
