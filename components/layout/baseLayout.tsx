import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function BaseLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  return (
    <div>
      <Header locale={locale} />
      <div className={"container"}>{children}</div>

      <Footer />
    </div>
  );
}
