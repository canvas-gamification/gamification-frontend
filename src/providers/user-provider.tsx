'use client'
import { UserContext } from '@/hooks/useAuthUser'
import { type User } from '@/models/user.model'
import React, { useState } from 'react'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
