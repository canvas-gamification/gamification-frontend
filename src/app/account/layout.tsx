const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {children}
    </section>
  )
}

export default Layout
