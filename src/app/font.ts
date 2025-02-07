import localFont from "next/font/local";

const moglanDemo = localFont({
  src: [
    {
      path: "../assets/fonts/Moglan_DEMO.ttf",
      weight: "400",
      style: "normal",
    },
  ],

  variable: "--font-moglanDemo",
});

export default moglanDemo;
