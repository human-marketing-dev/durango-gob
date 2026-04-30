/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        monument: ["var(--font-monument)", "Georgia", "serif"],
        sans:     ["var(--font-open-sans)", "Helvetica", "sans-serif"],
        lato:     ["var(--font-lato)", "Arial", "sans-serif"],
        poppins:  ["var(--font-poppins)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        "widest-2":   "2px",
        "widest-15":  "1.5px",
        "widest-125": "1.25px",
        "wide-08":    "0.8px",
        "wide-05":    "0.5px",
        "wide-03":    "0.3px",
      },
      boxShadow: {
        sm: "0 1px 4px rgba(0,0,0,0.08)",
        md: "0 2px 12px rgba(0,0,0,0.10)",
        lg: "0 4px 24px rgba(0,0,0,0.14)",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
    },
    colors: {
      primary:    "#1B1A19",
      secondary:  "#B8C0B8",
      accent:     "#4A535A",
      "blue-el":  "#9AA1A6",
      "blue-bg":  "#CACECF",
      overlay:    "#666968",
      white:      "#FFFFFF",
      black:      "#000000",
      transparent: "transparent",
    },
  },
  plugins: [],
};
