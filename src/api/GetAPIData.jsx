import React from 'react'

const getMovieData = async() => {
    try{
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e6dd65d1&s=harry+potter&page=1");
        const data = response.json();
        return data;

    }catch(error){
        console.log(error);
    }
  return (
    <div>
      
    </div>
  )
}

export default getMovieData;
