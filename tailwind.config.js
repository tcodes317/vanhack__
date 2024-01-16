/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens:{
      xxxs: "150px",
      xxs: "300px",
      xs: "468px",
      md: "768px",
      lg: "992px",
      xlg: "1024px",
      xxlg: "1280px",
      xxxlg: "1440px"
    }
  },
  plugins: [],
}

