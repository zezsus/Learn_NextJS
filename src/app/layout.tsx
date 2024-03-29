/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBlogComponent from "@/components/navbarblogcomponent";
import "react-notifications/lib/notifications.css";
import ReduxProvider from "./providers/reduxprovider";
import ReactQueryProvider from "./providers/reactqueryprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <ReactQueryProvider>
            <header>
              <NavBlogComponent />
            </header>
            {children}
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
