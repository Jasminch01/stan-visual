import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
const crismonText = Crimson_Text({
  variable: "--font-Crismon_Text",
  subsets: ["latin"],
  weight: "400"
});

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
      <body
        className={`${crismonText.className}`}
      >
        {children}
      </body>
    </html>
  );
}
