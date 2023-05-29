import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { styled } from "../../shared/styles"
import { z } from "zod"


const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
})
const FormContainer = styled("form", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "400px",
  padding: "2rem",
  borderRadius: "10px",
})

const FormError = styled("div", {
  color: "$error",
  fontSize: "0.8rem",
  textAlign: "center",
  marginTop: "0.25rem"
})

const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

const Input = styled("input", {
  padding: "0.5rem",
  border: "1px solid $gray500",
  borderRadius: "8px",
  "&:focus": {
    outline: "none",
    borderColor: "#ccc",
  },
})

const Label = styled("label", {
  marginBottom: "1rem",
})

const Button = styled("button", {
  padding: "0.5rem 1rem",
  border: "1px solid $secondary",
  backgroundColor: "$secondary",
  borderRadius: "8px",
  "&:focus": {
    outline: "none",
    borderColor: "$gray700",
  },
})

const createUserSchema = z.object({
  name: z.string().nonempty("Name should not be empty").transform(
   name => name.trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  ),
  email: z.string().email().nonempty("Email should not be empty"),
  password: z.string().min(8, "Password should be at least eight characters"),
})
type CreateUser = z.infer<typeof createUserSchema>
export default function Signup() {
  const { handleSubmit, register, formState: {errors} } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  })

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
        <InputContainer>
          <Label htmlFor="name">
            Name
          </Label>
          <Input id="name" {...register("name")} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">
            Email
          </Label>
          <Input id="email" {...register("email")} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">
            Password
          </Label>
          <Input type="password" id="password" {...register("password")} />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Button type="submit">
            Signup
          </Button>
        </InputContainer>
      </FormContainer>
    </Container>
  )
}
