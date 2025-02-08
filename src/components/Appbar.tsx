import React from "react";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
  weight: "400",
});

const Appbar = () => {
  return (
    <header className={`${oswald.className} absolute top-0 left-0 w-full z-20`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <nav className="flex gap-6 text-white text-sm uppercase tracking-[0.3em] font-light">
          <Link href="/stories">
            <span className="cursor-pointer">Stories</span>
          </Link>
          <Link href="/videos">
            <span className="cursor-pointer">Videos</span>
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            className="w-16 md:w-20"
            alt="Logo"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex gap-6 text-white text-sm uppercase tracking-[0.3em] font-light">
          <Link href="/packages">
            <span className="cursor-pointer">Packages</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Appbar;
