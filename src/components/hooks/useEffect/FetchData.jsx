import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((apiData) => setData(apiData) )
        .catch((error) => console.error("Fetching Error: ", error));
    }, [])
   

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div>
            <h2 className='text-5xl font-bold'>Fetch API Data</h2>
            <ul>
                {
                    data.slice(0, 5).map((currentData) => {
                        return(
                        <li key={currentData.id}>
                           <p>Username: {currentData.username}</p> 
                           <p>Name: {currentData.name}</p>
                        </li>
                        );
                    })
                }
                
            </ul>
        </div>
      
    </div>
  )
}

export default FetchData

