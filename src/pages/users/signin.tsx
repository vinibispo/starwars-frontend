import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  FormContainer,
  FormError,
  Input,
  InputContainer,
  Label,
  Link,
} from './shared/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SignInIcon from '../../ui/sign-in'
import { useSignIn } from '../../hooks/user'
import { AxiosError } from 'axios'

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
    setError,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync } = useSignIn()

  const onSubmit = async (data: SignInForm) => {
    await mutateAsync(data, {
      onError: (error, _, _ctx) => {
        if (error instanceof AxiosError) {
          setError('email', {
            message: error.response?.data.error,
          })

          setError('password', {
            message: error.response?.data.error,
          })
        }
      },
    })
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label error={!!errors.email} htmlFor="email">
            Email
          </Label>
          <Input id="email" error={!!errors.email} {...register('email')} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label error={!!errors.password} htmlFor="password">
            Password
          </Label>
          <Input
            error={!!errors.password}
            type="password"
            id="password"
            {...register('password')}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Link to="/signup">{"Don't have an account?"}</Link>
        </InputContainer>

        <InputContainer>
          <Link to="/forgot-password">Forgot Password?</Link>
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
