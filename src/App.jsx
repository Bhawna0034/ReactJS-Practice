import { useState } from "react";
import { MovieCards } from "./components/MovieCards";
import InlineCSSComponent from "./components/InlineCSSComponent";
import ConditionalStylingUsingTernaryOperator, {
  ConditinalStylingUsingANDOperator,
  ConditionalStylingUsingJSObject,
} from "./components/ConditinalStyling";
import MyButton, { Button } from './components/Button';
import { EventHandling } from "./components/EventHandling";
import EventProps, { ParentComponent } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropagation";
import SimpleCounter from "./components/hooks/SimpleCounter";
import { DerivedState, UserProfile } from "./components/hooks/DerivedState";
import ShoppingCart from "./components/hooks/ShoppingCart";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    // <section className="mx-auto p-16">
    //   <h1 className="whitespace-nowrap text-3xl font-bold mb-8">List of Best Movies of 2024-2025</h1>
    //   <MovieCards />
    // </section>
    <section className="">
      {/* <SimpleCounter/> */}
      {/* <DerivedState/> */}
      {/* <UserProfile/> */}
      <ShoppingCart/>
    </section>
  );
}

export default App;
