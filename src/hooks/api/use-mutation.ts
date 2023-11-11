import useSWRMutation, { type SWRMutationConfiguration } from 'swr/mutation'

interface MutationProps<DataType, ArgType> {
  url: string
  method?: 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  config?: SWRMutationConfiguration<DataType, any, any, ArgType>
}

const BASE_URL = 'http://localhost:8000/api/'

export const useMutation = <DataType, ArgType>(options: MutationProps<DataType, ArgType>) => {
  const { url, method = 'POST', config } = options

  return useSWRMutation<DataType, any, any, ArgType>(
    BASE_URL + url,
    async (url: string, { arg }: { arg: ArgType }) => {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(arg),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return await response.json()
    },
    config,
  )
}
