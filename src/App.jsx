import { useState } from 'react'
import './components/button'; 
import { AirPods } from './components/AirPodsCard';



import './App.css'
// import MyButton from './components/button';

function App() {
  const [count, setCount] = useState(0)

  return (
   <AirPods />
  )
}

export default App
