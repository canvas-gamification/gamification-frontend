'use client'
import { SWRConfig } from 'swr'

interface SWRProviderProps {
  children: React.ReactNode
}

export const SWRProvider = ({ children }: SWRProviderProps) => {
  return <SWRConfig
    value={{
      fetcher: async (resource) => {
        const response = await fetch(resource, {
          headers: {
            Authorization: 'Bearer 123',
          },
        })
        if (response.ok) {
          return await response.json()
        }
        throw new Error(response.statusText)
      },
    }}
  >
    {children}
  </SWRConfig>
}
