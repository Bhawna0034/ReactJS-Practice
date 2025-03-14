import { useState } from "react";
import { Todo } from "./components/projects/Todo/Todo";
import ShortCircuit from "./components/ShortCircuit";
import PracticeUseState from "./components/hooks/useState/practiceUseState";
import CounterChallenge from "./components/hooks/useState/CounterChallenge";
import UnControlled from "./components/UncontrolledComponent";
import UnControlledComponent from "./components/UncontrolledComponent";
import ControlledComponent from "./components/ControlledComponent";
import RegistrationForm from "./components/hooks/useState/RegistrationForm";
import LoginForm from "./components/hooks/useState/LoginForm";
import ContactForm from "./components/hooks/useState/ContactForm";
import Effect1 from "./components/hooks/useEffect/Effect1";



// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <section>
      <Effect1 />
    </section>
  );
}

export default App;
