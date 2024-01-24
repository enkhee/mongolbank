import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className={"container"}>{children}</div>

      <Footer />
    </div>
  );
}
