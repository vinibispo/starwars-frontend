import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import SignInIcon from '../../ui/sign-in'
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
import { useSignUp } from '../../hooks/user'
import { AxiosError } from 'axios'

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty('Name should not be empty')
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
    ),
  email: z.string().email().nonempty('Email should not be empty'),
  password: z.string().min(8, 'Password should be at least eight characters'),
})
type CreateUser = z.infer<typeof createUserSchema>
export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  })

  const { mutateAsync } = useSignUp()

  const onSubmit = async (data: CreateUser) => {
    await mutateAsync(data, {
      onError: (error) => {
        if (error instanceof AxiosError) {
          setError('email', {
            message: error.response?.data.errors,
          })

          setError('password', {
            message: error.response?.data.errors,
          })

          setError('name', {
            message: error.response?.data.errors,
          })
        } else {
          console.log(error)
        }
      },
    })
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="name" error={!!errors.name}>
            Name
          </Label>
          <Input id="name" error={!!errors.name} {...register('name')} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email" error={!!errors.email}>
            Email
          </Label>
          <Input id="email" error={!!errors.email} {...register('email')} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password" error={!!errors.password}>
            Password
          </Label>
          <Input
            type="password"
            id="password"
            {...register('password')}
            error={!!errors.password}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </InputContainer>
        <InputContainer>
          <Link to="/signin">Already have an account? Sign in</Link>
        </InputContainer>
        <InputContainer>
          <Button disabled={isSubmitting} type="submit">
            <span>Sign Up</span> <SignInIcon />
          </Button>
        </InputContainer>
      </FormContainer>
    </Container>
  )
}
