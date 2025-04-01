import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);
  return (
    <div className='flex flex-col gap-2 items-center justify-center h-lvh'>
      <h1 className='text-5xl font-bold'>{error.status}</h1>
      <h2 className='text-2xl font-bold mb-2'>Oops! Page not Found</h2>
      <NavLink to='/' className="border bg-blue-600 text-white font-bold px-4 py-2">Go to Home Page</NavLink>
    </div>
  )
}

export default ErrorPage
