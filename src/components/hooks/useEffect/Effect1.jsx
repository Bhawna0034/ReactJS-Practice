import React, { useEffect } from 'react'

const Effect1 = () => {
    useEffect(() => {
        console.log("Hello, useEffect");
    },[]);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <h2 className='text-5xl font-bold'>Hello, useEffect Hook</h2>
    </div>
  )
}

export default Effect1
