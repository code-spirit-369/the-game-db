import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Game DB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-gray-100 dark:bg-black-1 text-black dark:text-white">
            <Header />

            <div className="flex min-h-screen w-full lg:space-x-16 px-8 py-8 lg:px-20">
              <Sidebar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
