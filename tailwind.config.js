/** @type{import("tailwindcss").Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extend: {
    colors: () => ({

      white: "#ffffff",
      // background: "hsl(var(--background))",
      // foreground: "hsl(var(--foreground))",


      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      // subtitle: "hsl(var(--content-subtitle))",
      dark: {
        1: "hsl(var(--dark-1))",
        2: "hsl(var(--dark-2))",
        3: "hsl(var(--dark-3))",
        // "3-hover": "hsl(var(--dark-3-hover))",
        // transparent: "hsl(var(--dark-transparent))",
        // "transparent-darker": "hsl(var(--dark-transparent-darker))",
        // "transparent-lighter": "hsl(var(--dark-transparent-lighter))",
      },
      gray: {
        DEFAULT: "hsl(var(--gray))",
        foreground: "hsl(var(--gray-foreground))",
      },
    }),
    // },
  },
  plugins: [],
};
