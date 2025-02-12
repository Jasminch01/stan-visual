import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/Appbar";
import { crismonText } from "./font";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Susnata Chakma",
  description: "Best Photographer in Malbourne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={`${crismonText.className}`}>
        <Appbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
