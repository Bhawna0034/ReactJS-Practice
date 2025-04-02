import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GlobalLoading from '../UI/GlobalLoading'

const AppLayout = () => {
  return (
    <div className='p-8'>
        <GlobalLoading />
        <Header />
        <Outlet />
        <Footer />
      
    </div>
  )
}

export default AppLayout
