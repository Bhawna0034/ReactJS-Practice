import React from 'react'

const PropDrilling = () => {
  return (
    <div className='bg-blue-950 text-white flex flex-col items-center justify-center h-lvh'>
        <h2 className='text-4xl font-bold mb-10'>Prop Drilling</h2>
        <h3 className='text-xl font-semibold mb-2'>Component A</h3>
        <Child data = "ReactJs"/>
      
    </div>
  )
}

const Child = (props) => {
    return(
        <div>
            <h2 className='text-xl font-semibold mb-2'>Hello, I'm Component B</h2>
            <GrandChild data = {props.data} />

        </div>
    )
}
const GrandChild = (props) => {
    return(
        <div>
            <h2 className='text-xl font-semibold mb-2'>Hello, I'm Component C</h2>
            <GreatGrandChild data = {props.data} />
        </div>
    )

}
const GreatGrandChild = (props) => {
    return(
        <div>
            <h2 className='text-xl font-semibold text-center'>I love {props.data}</h2>
        </div>
    )
}

export default PropDrilling
