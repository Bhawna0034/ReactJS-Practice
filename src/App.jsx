// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/React Router/layout/AppLayout";
import Home from "./components/React Router/Home";
import About from "./components/React Router/About";
import Contact from "./components/React Router/Contact"
import ErrorPage from "./components/React Router/ErrorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]

  }
])

function App() {
  return <RouterProvider router = {router} />
}

export default App;
