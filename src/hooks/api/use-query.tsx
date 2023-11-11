import useSWR, {} from 'swr'

interface QueryProps {
  url: string
}

const BASE_URL = 'http://localhost:8000/api/'

// TODO: fix the string type for error
export const useQuery = <Data, Error = string>(options: QueryProps) => {
  const { url } = options

  return useSWR<Data, Error>(BASE_URL + url)
}
