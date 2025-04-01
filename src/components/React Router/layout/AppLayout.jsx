import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className='p-4'>
        <Header />
        <Outlet />
        <Footer />
      
    </div>
  )
}

export default AppLayout
