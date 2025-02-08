import { Crimson_Text } from "next/font/google";
import localFont from "next/font/local";

export const moglanDemo = localFont({
  src: [
    {
      path: "../assets/fonts/Moglan_DEMO.ttf",
      weight: "400",
      style: "normal",
    },
  ],

  variable: "--font-moglanDemo",
});

export const crismonText = Crimson_Text({
  variable: "--font-Crismon_Text",
  subsets: ["latin"],
  weight: "400",
  style : ['normal', 'italic']
});
