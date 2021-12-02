module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      boxShadow: {
        outer: "0 0 6px 0 rgba(0, 0, 0,  0.08)"
      },
      colors: {
      gray: {
        // 100: "#8b91a9",
        light: "#f5f6fa",
        light100: "#8b91a9"
      },
      blue: {
        100: "#3246d3"
      },
      yellow: {
        100: "#fef7f1"
      },
      red: {
        200: "#e0515e"
      }
    }
    }
  },
  variants: {
    scrollbar: ['dark', 'rounded'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
