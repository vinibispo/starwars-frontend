import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import SignInIcon from "../../ui/sign-in"
import { Button, Container, FormContainer, FormError, Input, InputContainer, Label,  } from "./shared/form"


const createUserSchema = z.object({
  name: z.string().nonempty("Name should not be empty").transform(
    name => name.trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  ),
  email: z.string().email().nonempty("Email should not be empty"),
  password: z.string().min(8, "Password should be at least eight characters"),
})
type CreateUser = z.infer<typeof createUserSchema>
export default function Signup() {
  const { handleSubmit, register, formState: { errors } } = useForm<CreateUser>({
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
            <span>Sign Up</span> <SignInIcon />
          </Button>
        </InputContainer>
      </FormContainer>
    </Container>
  )
}
