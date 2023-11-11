import { type User } from '@/models/user.model'
import { createContext, useContext } from 'react'

interface IUserContext {
  user: User | null
  setUser: (user: User) => void
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => null,
})

export const useAuthUser = () => {
  return useContext(UserContext)
}
