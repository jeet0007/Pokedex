// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    safelist: [/data-theme$/, /^btn-.*/, /^text-.*/, /^theme-.*/, /^bg-.*/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        landscape: { raw: "(orientation: landscape)" },
        xs: { max: "425px" },
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
    colors: {
      ...colors,
      "status-accept": "#EB0994",
      "status-open": "#7A00C6",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["disabled", "active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        agentmate: {
          primary: "#F32735",
          "primary-focus": "#BC190E",
          "primary-content": "#ffffff",
          secondary: "#F37F27",
          "secondary-focus": "#D3620C",
          "secondary-content": "#ffffff",
          accent: "#0A9AAF",
          "accent-focus": "#08798A",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#6C6C6C",
          "neutral-content": "#FFFFFF",
          "base-100": "#FFFFFF",
          "base-200": "#F4F4F6",
          "base-300": "#E2E2E2",
          "base-content": "#211E1E",
          info: "#006CE3",
          success: "#0EB366",
          warning: "#E8B239",
          error: "#BC190E",
          "info-content": "#000000",
          "success-content": "#000000",
          "warning-content": "#000000",
          "error-content": "#FFFFFF",
        },
      },
      "light",
    ],
  },
};
