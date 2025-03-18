import React from 'react'
import { useId } from 'react';

const Id = () => {
    let id = useId();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-5xl font-bold'>useId Hook</h2>
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>Username: </label>
                <input type='text' id={id + "usernameId"} name="username" />
            </div>
            <div>
                <label htmlFor={id + "passwordId"}>Password: </label>
                <input type='password' id={id + "passwordId"} name="password"/>
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email: </label>
                <input type='email' id={id + "emailId"} name="email" />
            </div>
        </form>
      
    </div>
  )
}

export default Id
