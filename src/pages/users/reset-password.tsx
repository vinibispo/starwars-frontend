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
import { useNavigate, useSearchParams } from 'react-router-dom'

const resetPasswordSchema = z.object({
  password: z.string().min(8, 'Password should be at least 8 characters'),
})

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>
export default function ForgotPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const handleFetch = async ({ password }: ResetPasswordForm) => {
    const token = searchParams.get('token')
    const response = await api.post('/passwords/reset', {
      password,
      password_reset_token: token,
    })
    return response.data
  }

  const { mutateAsync } = useMutation({
    mutationFn: handleFetch,
    mutationKey: ['reset-password'],
  })

  const onSubmit = async (data: ResetPasswordForm) => {
    await mutateAsync(data, {
      onError: (error, _, _ctx) => {
        if (error instanceof AxiosError) {
          setError('password', {
            message: error.response?.data.error,
          })
        }
      },
      onSuccess: () => {
        alert('Password reset successfully')
        navigate('/signin')
      },
    })
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label error={!!errors.password} htmlFor="password">
            password
          </Label>
          <Input
            id="password"
            type="password"
            error={!!errors.password}
            {...register('password')}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
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
