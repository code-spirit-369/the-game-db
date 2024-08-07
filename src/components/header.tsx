"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggler from "@/components/theme-toggler";
import MobileSidebar from "@/components/mobile-sidebar";

export default function Header() {
  const [show, handleShow] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header
      className={`flex items-center justify-between p-4 border-b-2 border-gray-200 dark:border-white/5 mb-8 sticky top-0 z-10 px-8 py-8 lg:px-20 ${
        show &&
        "bg-gray-100 dark:bg-black-1 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 shadow-2xl"
      }`}
    >
      <h1 className="hidden lg:block text-3xl font-bold">
        <Link href="/">The Game DB</Link>
      </h1>

      <div className="flex lg:hidden">
        <MobileSidebar />
      </div>

      <ThemeToggler />
    </header>
  );
}
