import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children, user }) {
  return (
    <>
      <NavBar user={user} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
