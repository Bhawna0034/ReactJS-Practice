import React, { useEffect, useState } from 'react'

const Effect2 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count: ", count);
    }, [count])
    
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 min-h-screen'>
        <h2 className='text-5xl font-bold'>Counter with useEffect</h2>
        <p className='text-2xl'>Count: {count} </p>
        <button  onClick = {() => setCount(count + 1)} className='bg-orange-500 text-white font-bold rounded-lg px-4 py-2'>Increment</button>
      
    </div>
  )
}

export default Effect2
