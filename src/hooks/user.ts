import { useMutation } from '@tanstack/react-query'
import { api } from '../resources/api'
import { useContext } from 'react'
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

  const { user, status, setUser, setStatus, setInStorage, removeInStorage } =
    context
  const isAuthenticated = status === 'authenticated'
  const isValidAuth = ['authenticated', 'checking'].includes(status)

  const isInvalidAuth = ['unauthenticated', 'checking'].includes(status)
  const signOut = () => {
    setStatus('unauthenticated')
    setUser({ name: '', email: '', token: '' })
    removeInStorage()
  }

  return {
    user,
    status,
    setUser,
    setStatus,
    isAuthenticated,
    isInvalidAuth,
    setInStorage,
    signOut,
    isValidAuth,
  }
}

export const useSignUp = () => {
  const { setUser, setStatus, setInStorage } = useAuth()
  const handleFetch = async ({ name, email, password }: UserData) => {
    try {
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
      }
      setStatus('unauthenticated')
    } catch (error) {
      setStatus('unauthenticated')
      throw error
    }
  }
  const { mutate, ...rest } = useMutation({
    mutationFn: handleFetch,
    mutationKey: ['signup'],
    onSuccess: (data, _, _ctx) => {
      setInStorage(data)
    },
  })

  return {
    mutate,
    ...rest,
  }
}

type SignInData = {
  email: string
  password: string
}
export const useSignIn = () => {
  const { setUser, setStatus, setInStorage } = useAuth()

  const handleFetch = async ({ email, password }: SignInData) => {
    try {
      const response = await api.post('/sessions', {
        session: {
          email,
          password,
        },
      })
      if (userSchema.safeParse(response.data).success) {
        setUser(response.data)
        setStatus('authenticated')
        return response.data
      }
      setStatus('unauthenticated')
    } catch (error) {
      setStatus('unauthenticated')
      throw error
    }
  }

  const {
    mutate,
    status: _,
    ...rest
  } = useMutation({
    mutationFn: handleFetch,
    mutationKey: ['signin'],
    onSuccess: (data, _, _ctx) => {
      setInStorage(data)
    },
  })

  return {
    mutate,
    ...rest,
  }
}
