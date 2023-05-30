import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  FormContainer,
  FormError,
  Input,
  InputContainer,
  Label,
} from './shared/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SignInIcon from '../../ui/sign-in'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type SignInForm = z.infer<typeof signInSchema>
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  })

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" {...register('password')} />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Button type="submit">
            <span>Sign In</span> <SignInIcon />
          </Button>
        </InputContainer>
      </FormContainer>
    </Container>
  )
}
