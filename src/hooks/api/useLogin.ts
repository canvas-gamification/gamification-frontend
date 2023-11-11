import { type User } from '@/models/user.model'
import { useMutation } from './use-mutation'
import { useAuthUser } from '../useAuthUser'

export const useLogin = () => {
  const { setUser } = useAuthUser()
  return useMutation<User, { username: string, password: string }>({
    url: 'api-token-auth/',
    config: {
      onSuccess (data, key, config) {
        setUser(data)
      },
    },
  })
}
