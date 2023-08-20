import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavAdmin from '../NavAdmin/NavAdmin'

export default function LayoutAdmin() {
  return (
    <>
    <NavAdmin/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}
