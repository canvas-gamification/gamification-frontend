import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavbarComponent } from '@/components/NavbarComponent'
import { SWRProvider } from '@/providers/swr-provider'
import { UserProvider } from '@/providers/user-provider'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coursewise',
  description: 'Coursewise',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SWRProvider>
      <UserProvider>
        <html lang="en">
          <body className={inter.className}>
            <ToastContainer theme='dark' />
            <header>
              <NavbarComponent />
            </header>
            {children}
          </body>
        </html>
      </UserProvider>
    </SWRProvider>
  )
}
