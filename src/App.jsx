import { useState } from "react";
import { Todo } from "./components/projects/Todo/Todo";
import ShortCircuit from "./components/ShortCircuit";
import PracticeUseState from "./components/hooks/useState/practiceUseState";



// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <section>
      <PracticeUseState />
    </section>
  );
}

export default App;
