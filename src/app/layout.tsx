import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavbarComponent } from '@/components/NavbarComponent'
import { SWRProvider } from '@/providers/swr-provider'

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
      <html lang="en">
        <body className={inter.className}>
          <header>
            <NavbarComponent />
          </header>
          {children}
        </body>
      </html>
    </SWRProvider>
  )
}
