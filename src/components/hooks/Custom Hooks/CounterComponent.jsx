import React from 'react'
import useCounter from './useCounter/useCounter'

const CounterComponent = () => {
    const {count, increment, decrement} = useCounter(10);
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-lvh'>
        <h2 className='text-5xl font-bold'>Counter: {count}</h2>
        <button onClick={increment} disabled={count >= 100} className='bg-red-500 font-bold border-2 border-black px-4 py-2 w-[150px]'>Increment</button>
        <button onClick={decrement} disabled={count <= 10} className='bg-green-500 font-bold border-2 border-black px-4 py-2 w-[150px]'>Decrement</button>
      
    </div>
  )
}

export default CounterComponent
