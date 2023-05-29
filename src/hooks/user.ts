import { useMutation } from '@tanstack/react-query'
import { api } from '../resources/api'
import { useState } from 'react'
import { User, userSchema } from '../resources/schema/user'
import { storage } from '../resources/storage'

type Status = 'checking' | 'authenticated' | 'unauthenticated'
type UserData = {
  email: string
  name: string
  password: string
}
export const useSignUp = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    token: '',
  })
  const [status, setStatus] = useState<Status>('checking')
  const handleFetch = ({ name, email, password }: UserData) => {
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
  const { mutate } = useMutation({
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
  }
}
