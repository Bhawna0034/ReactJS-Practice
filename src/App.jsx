import { useState } from "react";
import FetchPikachu from "./components/hooks/useEffect/fetchPikachu";




// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <section>
      <FetchPikachu />
    </section>
  );
}

export default App;
