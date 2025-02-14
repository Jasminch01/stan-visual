import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "",
        foreground: "",
      },
      fontFamily: {
        oswald: ["var(--font-Oswald)"],
        crimson_text: ["var(--font-Crismon_Text)"],
        moglanDemo: ["var(--font-moglanDemo)"],
      },
      backgroundImage: {
        hero: "url('/img/hero-banner.png')",
        about_top: "url('/img/Group.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
