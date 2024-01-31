/** @format */
"use client";

import { Provider } from "react-redux";
import BlogPage from "./blogs/page";
import { store } from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BlogPage />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
