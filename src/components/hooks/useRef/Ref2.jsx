import React, { useRef } from 'react'

const Ref2 = () => {

    const btnRef = useRef(null);
    const handleChangeColor = () => {
        btnRef.current.style.backgroundColor = "orange";
    }
  return (
    <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
        <button ref={btnRef} className='bg-green-500 text-white px-4 py-2 rounded-full w-[200px]'>Buy Now</button>
        <button onClick={handleChangeColor} className='bg-pink-600 text-white px-4 py-2 rounded-full  w-[200px]'>Add to Cart</button>
      
    </div>
  )
}

export default Ref2
