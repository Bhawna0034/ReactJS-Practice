import { useState } from 'react'
import { MovieCards } from './components/MovieCards'

import './App.css'
import Profile  from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <MovieCards />
    <Profile />
  )
}

export default App
