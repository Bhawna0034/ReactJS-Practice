import { useState } from "react";
import UseExample from "./components/hooks/use/UseExample";
import Mode from "./components/projects/Light-Dark Mode/Mode";
import Reducer from "./components/hooks/useReducer/Reducer";
import Stopwatch from "./components/hooks/useRef/Stopwatch";
import ReactMemo from "./components/hooks/Memo/ReactMemo";
import UseMemo from "./components/hooks/Memo/UseMemo";





// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <>
      <UseMemo/>
    </>
  );
}

export default App;
