"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
function Providers({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <DataProvider>{children}</DataProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default Providers;
