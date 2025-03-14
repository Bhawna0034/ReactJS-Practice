import React, { useEffect, useState } from 'react'

const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

   useEffect(() => {
        document.title = `Count: ${count}`;
   },[count]);

    useEffect(() => {
        // console.log("Count: ", count);
        console.log(name);
    },[name]);
  return (
    <div className='flex flex-col gap-10 items-center justify-center min-h-screen'>
      
        <h2 className='text-5xl font-bold m'>useEffect Challenge</h2>
        <p className='text-xl font-medium '>Count: {count} </p>
        <button onClick={() => setCount(count + 1)} className='bg-purple-500 text-white font-bold rounded-md px-4 py-2'>Increment</button>
        <p className='text-xl font-medium'>Name: {name} </p>
        <input type='text' placeholder='Enter your name' className='bg-gray-100 px-4 py-2 rounded-md' value={name} onChange={(event) => setName(event.target.value)}/>
      
      
    </div>
  )
}

export default EffectChallenge
