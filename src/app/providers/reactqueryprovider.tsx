/** @format */
"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery}>
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </QueryClientProvider>
  );
};
export default ReactQueryProvider;
