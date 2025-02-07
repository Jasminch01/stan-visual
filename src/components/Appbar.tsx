import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
  weight: "400",
});

const Appbar = () => {
  return <div className={`${oswald.className}`}></div>;
};

export default Appbar;
