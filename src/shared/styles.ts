import { createStitches, defaultThemeMap } from "@stitches/react"

export const { globalCss, styled, css, keyframes, ...rest } = createStitches({
  themeMap: defaultThemeMap,
  theme: {
    colors: {
      primary: "#000",
      text: "#fff",
      secondary: "#987942",
      card: "#0C1840"
    },
    fonts: {
      'primary': 'Inter',
      'secondary': 'Bebas Neue, sans-serif',
    }
  },

})
