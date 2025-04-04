// import './App.css'

import { useEffect } from "react";
import { getPost } from "./api/PostAPI";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AppLayout from "./components/React Router/layout/AppLayout";
// import Home from "./components/React Router/pages/Home";
// import About from "./components/React Router/pages/About";
// import Contact, { contactData } from "./components/React Router/pages/Contact"
// import ErrorPage from "./components/React Router/pages/ErrorPage";
// import getMovieData from "./api/GetAPIData";
// import Movie from "./components/React Router/pages/Movie";
// import MovieDetails from "./components/React Router/UI/MovieDetails";
// import getMovieDetails from "./api/getMovieDetails";
// import MovieAxios from "./components/Axios/MovieAxios";




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/movie",
//         element: <Movie />,
//         loader: getMovieData
//       },
//       {
//         path: "/movie/:movieID",
//         element: <MovieDetails />,
//         loader: getMovieDetails,

//       },

//       {
//         path: "/contact",
//         element: <Contact />,
//         action: contactData
//       }
//     ]

//   }
// ])



function App() {
  console.log(getPost());
  const getPostData = async() => {
    try{
      const response =  await getPost();
      console.log(response);
    }catch(error){
      console.log(error);
    }
 }

 useEffect(() => {
  getPostData();

 }, []);
  // return <RouterProvider router = {router} />
  return(
    <>
    {/* <MovieAxios /> */}
    <h2>Hello Axios</h2>
    </>
    
  
 
  )
}

export default App;
