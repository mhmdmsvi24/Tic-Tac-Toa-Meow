/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //* Color Palette
      colors: {
        yale_blue: {
          DEFAULT: "#134074",
          100: "#040d17",
          200: "#07192e",
          300: "#0b2644",
          400: "#0f325b",
          500: "#134074",
          600: "#1d63b3",
          700: "#3c88df",
          800: "#7db0ea",
          900: "#bed7f4",
        },
        berkeley_blue: {
          DEFAULT: "#13315c",
          100: "#040a13",
          200: "#081425",
          300: "#0b1e38",
          400: "#0f284b",
          500: "#13315c",
          600: "#21559f",
          700: "#397bd6",
          800: "#7ba7e4",
          900: "#bdd3f1",
        },
        oxford_blue: {
          DEFAULT: "#0b2545",
          100: "#02080e",
          200: "#050f1c",
          300: "#07172a",
          400: "#091e38",
          500: "#0b2545",
          600: "#174e90",
          700: "#2375da",
          800: "#6ca3e7",
          900: "#b5d1f3",
        },
        powder_blue: {
          DEFAULT: "#8da9c4",
          100: "#17222c",
          200: "#2e4459",
          300: "#456685",
          400: "#6088ad",
          500: "#8da9c4",
          600: "#a3bad0",
          700: "#baccdc",
          800: "#d1dde7",
          900: "#e8eef3",
        },
        mint_cream: {
          DEFAULT: "#eef4ed",
          100: "#283b24",
          200: "#507749",
          300: "#7dab75",
          400: "#b5cfb1",
          500: "#eef4ed",
          600: "#f1f6f0",
          700: "#f4f8f4",
          800: "#f8faf7",
          900: "#fbfdfb",
        },
      },
    },
    //* Font Family
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
    },
    //* Shadows
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
  },
  plugins: [],
};

/*
Component-specific Design
  Page Background:
    bg-mint_cream-500
  Main Background (mechanics, board, scores, logs):
    bg-powder_blue-700
    shadow-lg

  Game Board:
    bg-yale_blue-500
    shadow-md

  Board Blocks:
    bg-mint_cream-600
    hover:bg-mint_cream-700
    text-oxford_blue-500
    font-sans font-bold text-4xl

  Players Turn Display:
    bg-berkeley_blue-600
    text-mint_cream-500
    font-serif text-xl

  Winner Modal:
    bg-powder_blue-500
    border-2 border-yale_blue-600
    shadow-2xl
    text-oxford_blue-500
    font-sans text-2xl font-bold

  Log Section:
    bg-powder_blue-200
    text-oxford_blue-400
    font-mono text-sm
*/
