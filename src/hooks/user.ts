import { useMutation } from '@tanstack/react-query'
import { api } from '../resources/api'
import { useContext } from 'react'
import { storage } from '../resources/storage'
import { AuthContext } from '../shared/contexts/auth-context'
import { userSchema } from '../resources/schema/user'

type UserData = {
  email: string
  name: string
  password: string
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')

  const { user, status, setUser, setStatus } = context
  const isAuthenticated = status === 'authenticated'

  return {
    user,
    status,
    setUser,
    setStatus,
    isAuthenticated,
  }
}

export const useSignUp = () => {
  const { setUser, setStatus, user, status } = useAuth()
  const handleFetch = async ({ name, email, password }: UserData) => {
    const response = await api.post('/users', {
      user: {
        name,
        email,
        password,
      },
    })
    if (userSchema.safeParse(response.data).success) {
      setUser(response.data)
      setStatus('authenticated')
      return response.data
    } else {
      setStatus('unauthenticated')
      throw new Error('Invalid user data')
    }
  }
  const {
    mutate,
    status: _,
    ...rest
  } = useMutation({
    mutationFn: handleFetch,
    mutationKey: ['signup'],
    onSuccess: (data, _, _ctx) => {
      storage.setItem('@starwars/user', data)
    },
  })

  return {
    user,
    status,
    mutate,
    ...rest,
  }
}
