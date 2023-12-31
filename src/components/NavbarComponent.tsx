'use client'
import { useAuthUser } from '@/hooks/useAuthUser'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import Image from 'next/image'

export const NavbarComponent = () => {
  const { user } = useAuthUser()
  // TODO: use user here
  console.debug(user?.username)
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <Image src="/logo.jpg" width={36} height={36} className="rounded-full mr-3 sm:h-9" alt="Coursewise Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Coursewise</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Course</Navbar.Link>
        <Navbar.Link href="#">Community</Navbar.Link>
        <Navbar.Link href="#">Problem Sets</Navbar.Link>
        <Navbar.Link href="#">FAQ</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
