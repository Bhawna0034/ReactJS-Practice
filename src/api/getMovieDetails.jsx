import React from 'react'

const getMovieDetails = async({params}) => {
  // console.log(params);
  const id = params.movieID;
  const API_KEY = import.meta.env.VITE_API_KEY;

    try{
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();
        return data;
      


    }catch(error){
        console.log(error);
    }
  return (
    <div>
      
    </div>
  )
}

export default getMovieDetails;
