import { useState } from "react";


export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});

  //another state for storing task
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
 

  function handleInputChange(value) {
    setInputValue({id:value, content:value, checked:false});
  }

  function handleFormSubmit(event){
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"", content:"", checked:false});
  }
    return(
        <section id="form">
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex items-center rounded-xl bg-white mt-4 mb-6"
                  >
                    <div className="px-8" >
                      <input
                        type="text"
                        id="todo-input"
                        className=" focus:outline-none text-black  text-md py-2"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        id="todo-btn"
                        className=" bg-blue-400 text-lg text-white font-semibold focus:outline-none focus: scale-[1.02] rounded-r-xl  px-4 py-2"
                      >
                        Add Task
                      </button>
                    </div>
                  </form>
                </section>
    )
}