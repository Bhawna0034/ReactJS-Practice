// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/React Router/Home";
import About from "./components/React Router/About";
import Contact from "./components/React Router/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
