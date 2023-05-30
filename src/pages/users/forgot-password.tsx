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
import { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../resources/api'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>
export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const handleFetch = async ({ email }: ForgotPasswordForm) => {
    await api.post('/passwords/forgot', { email })
  }

  const { mutateAsync } = useMutation({
    mutationFn: handleFetch,
    mutationKey: ['forgot-password'],
  })

  const onSubmit = async (data: ForgotPasswordForm) => {
    await mutateAsync(data, {
      onError: (error, _, _ctx) => {
        if (error instanceof AxiosError) {
          setError('email', {
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
          <Link to="/signin">Back to login</Link>
        </InputContainer>
        <InputContainer>
          <Button type="submit">
            <span>Send</span> <SignInIcon />
          </Button>
        </InputContainer>
      </FormContainer>
    </Container>
  )
}
