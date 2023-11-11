'use client'
import { useLogin } from '@/hooks/api/useLogin'
import { TextInput, Button } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
  const { trigger: login } = useLogin()

  const onSubmit = async (data: FormData) => {
    const email = data.get('email') as string
    const password = data.get('password') as string

    if (email && password) {
      login({ username: email, password }).then(data => { console.debug(data) }).catch(data => { console.debug(data) })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-60px)] lg:py-0">
      <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <Image width={32} height={32} className="rounded-full w-8 h-8 mr-2" src="/logo.jpg" alt="logo" />
        Coursewise
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form className="space-y-4 md:space-y-6" action={onSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <TextInput name='email' type='email' placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <TextInput type="password" name="password" id="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full">Login</Button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account? <Link href="/account/signup" className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Sign up here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
