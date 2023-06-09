import { ReactNode, createContext, useEffect, useState } from 'react'
import { User } from '../../resources/schema/user'
import { USER_KEY, storage } from '../../resources/storage'
import { api } from '../../resources/api'

type Status = 'checking' | 'authenticated' | 'unauthenticated'

type AuthContextType = {
  user: User
  status: Status
  setUser: (user: User) => void
  setInStorage: (user: User) => void
  setStatus: (status: Status) => void
  removeInStorage: () => void
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    token: '',
  })

  const [status, setStatus] = useState<Status>('checking')

  useEffect(() => {
    storage.getItem<User>(USER_KEY).then((user) => {
      if (user) {
        setUser(user)
        setStatus('authenticated')
      } else {
        setStatus('unauthenticated')
      }
    })
  }, [])

  useEffect(() => {
    if (user.token) {
      api.defaults.headers.common.Authorization = `Bearer ${user.token}`
    }
  }, [user.token])

  const setInStorage = (user: User) => {
    storage.setItem(USER_KEY, user)
  }
  const removeInStorage = () => {
    storage.removeItem(USER_KEY)
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        setUser,
        setStatus,
        setInStorage,
        removeInStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
