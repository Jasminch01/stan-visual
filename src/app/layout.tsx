import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/Appbar";
import { crismonText } from "./font";

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
      <body className={`${crismonText.className}`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
