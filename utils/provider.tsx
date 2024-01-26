"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { DataProvider } from "@/contexts/dataContext";

function Providers({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentUrl, setCurrentUrl] = useState("" as string);
  useEffect(() => {
    const url = pathname + searchParams.toString();
    setCurrentUrl(url);
  }, [pathname, searchParams]);
  console.log(currentUrl);

  return (
    <>
      <DataProvider>{children}</DataProvider>
    </>
  );
}

export default Providers;
