import React, { useRef } from 'react'

const Ref1 = () => {
    const username = useRef(null);
    const password = useRef(null);
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);

    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-5xl font-bold mb-8'>useRef Hook</h2>
        <div>
            <form onSubmit={handleFormSubmit} className='space-y-4'>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input ref={username} type='text' className='bg-gray-100 p-2 ml-4 focus:outline-none' />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input ref={password} type='text' className='bg-gray-100 p-2 ml-4 focus:outline-none' />
                </div>
                <div>
                    <button type='submit' className='bg-teal-600 px-4 py-2 w-full rounded-md border border-black'>Submit</button>
                </div>

               

            </form>
           
        </div>
      
    </div>
  )
}

export default Ref1
