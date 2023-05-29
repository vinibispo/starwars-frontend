import { styled } from "../../../shared/styles"

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
})
export const FormContainer = styled("form", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "400px",
  padding: "2rem",
  borderRadius: "10px",
})

export const FormError = styled("div", {
  color: "$error",
  fontSize: "1rem",
  textAlign: "center",
  marginTop: "0.25rem",
  maxWidth: "200px"
})

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

export const Input = styled("input", {
  padding: "0.5rem",
  border: "1px solid $gray500",
  borderRadius: "8px",
  "&:focus": {
    outline: "none",
    borderColor: "#ccc",
  },
})

export const Label = styled("label", {
  marginBottom: "1rem",
})

export const Button = styled("button", {
  padding: "0.5rem 1rem",
  border: "1px solid $secondary",
  backgroundColor: "$secondary",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  "&:focus": {
    outline: "none",
  },
  span: {
    fontSize: "1rem",
    color: "$textInButton"
  }
})
