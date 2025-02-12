import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-50 h-screen w-full p-0 m-0'>
      <h1 className='tex-lg font-semibold text-center text-cyan-400'>hello world</h1>
    </div>
  )
}

export default App
