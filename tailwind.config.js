/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      borderRadius: {
        "15px": "15px",
        "25px": "25px",
        "10px": "10px",
      },
      padding: {
        "10px": "10px",
        "30px": "30px",
      },
      margin: {
        "10px": "10px",
      },
      colors: {
        navigation__text: "#5B5B5B",
        navigation__active: "#FF9900",
        "invite-link": "#5867DD",
        normal: "#4A4A4A",
        "withdrawal-amount": "#F4516C",
        light: "#fafafa",
        "profot-amount": "#34BFA3",
        "search-btn": "#34BFA3",
        "deposit-amount": "#B9B9B9",
        badge__dark: "#B9B9B9",
        badge__green: "#34BFA3",
        badge__purple: "#5867DD",
        badge__red: "#F4516C",
        lightgray: "#858585",
      },
      backgroundColor: {
        navigation__active: "#ff9900",
        "invite-link": "#5867DD",
        "profit-amount": "#34BFA3",
        "search-btn": "#34BFA3",
        "withdrawal-amount": "#F4516C",
        badge__dark: "#B9B9B9",
        badge__green: "#34BFA3",
        badge__purple: "#5867DD",
        badge__red: "#F4516C",
        badge__warning: "#FFC241",
        lightgray: "#858585",
        // 'withdrawal-amount': '#F4516C'
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

// Darkmode colors
// dark bg [#222831]
// light bg [#393E46]
