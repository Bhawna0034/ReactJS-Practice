import { useState } from "react";
import FetchPikachu from "./components/hooks/useEffect/fetchPikachu";
import PokemonWebsite from "./components/projects/Pokemon/PokemonWebsite";
import Ref1 from "./components/hooks/useRef/Ref1";
import Ref2 from "./components/hooks/useRef/Ref2";
import Stopwatch from "./components/hooks/useRef/Stopwatch";
import ForwardRef from "./components/hooks/useRef/ForwardRef";
import Id from "./components/hooks/useId/Id";
import PropDrilling from "./components/hooks/PropDrilling";





// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <section>
      <PropDrilling/>
    </section>
  );
}

export default App;
