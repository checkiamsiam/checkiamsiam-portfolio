module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#F27F1E",
                   
          "secondary": "#FF7533",
                   
          "accent": "#63ede1",
                   
          "neutral": "#313131",
                   
          "base-100": "#ffffff",
                   
          "info": "#1C5BE3",
                   
          "success": "#1EA978",
                   
          "warning": "#B97113",
                   
          "error": "#F33558",
                   },
      },
      "forest",
      "synthwave",
    ],
  },
}
