import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../page/shared/Navbar'
import Footer from '../page/shared/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout