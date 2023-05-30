import { ReactNode, createContext, useState } from 'react'
import { User } from '../../resources/schema/user'

type Status = 'checking' | 'authenticated' | 'unauthenticated'

type AuthContextType = {
  user: User
  status: Status
  setUser: (user: User) => void
  setStatus: (status: Status) => void
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    token: '',
  })

  const [status, setStatus] = useState<Status>('checking')
  return (
    <AuthContext.Provider value={{ user, status, setUser, setStatus }}>
      {children}
    </AuthContext.Provider>
  )
}
