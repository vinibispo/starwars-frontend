import { createStitches, defaultThemeMap } from "@stitches/react"

export const { globalCss, styled, css, keyframes, ...rest } = createStitches({
  themeMap: defaultThemeMap,
  theme: {
    colors: {
      primary: "#000",
      text: "#fff",
      textInButton: "#000",
      secondary: "#ffe81f",
      card: "#0B1838",
      error: "#EB212E",
      link: "#2FF923",
    },
    fonts: {
      'primary': 'Inter',
      'secondary': 'Bebas Neue, sans-serif',
    }
  },

})
