import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Applayout
