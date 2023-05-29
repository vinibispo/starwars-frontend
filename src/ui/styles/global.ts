import { globalCss } from "../../shared/styles.ts"

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    color: "$text",
    fontSize: "1rem",
  },
  html: {
    width: "100%",
  },
  body: {
    background: `url("/src/assets/wallpaper.png") no-repeat`,
    backgroundSize: "cover",
  },
  "body, input, button, textarea": {
    fontFamily: "$primary",
    fontSize: "1rem",
    fontWeight: 400,
    color: "$text",
  },
  input: {
    color: "$primary",
  },
})
