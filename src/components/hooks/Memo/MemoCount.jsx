import React, { memo, useRef } from 'react'

const MemoCount = () => {
    const renderCount = useRef(0);
    console.log(renderCount.current);
  return (
    <div className='flex flex-col gap-3 items-center justify-center h-lvh'>
        <p className='text-md font-medium'>Nothing changed here: but I've now rendered</p>
        <span className='text-red-600'>{renderCount.current++}time</span>
      
    </div>
  )
}

export default memo(MemoCount);
