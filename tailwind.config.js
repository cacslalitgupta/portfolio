const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      // All colours come from CSS variables, so the palette + dark mode can change live.
      colors: {
        canvas: token("bg"),
        surface: token("surface"),
        ink: token("text"),
        muted: token("muted"),
        line: token("border"),
        primary: token("primary"),
        onprimary: token("primary-fg"),
        accent: token("accent"),
        onaccent: token("accent-fg"),
        brand: token("brand"),
        soft: token("brand-soft"),
        acctext: token("accent-text")
      },
      boxShadow: { card: "0 18px 50px -20px rgb(var(--primary) / .25)" },
      keyframes: {
        rise: { "0%": { opacity: 0, transform: "translateY(14px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.96)" }, "100%": { opacity: 1, transform: "none" } }
      },
      animation: { rise: "rise .6s ease both", pop: "pop .18s ease both" }
    }
  },
  plugins: []
};
