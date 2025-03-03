import { useEffect, useState } from "react";
// import { FaCheckSquare, FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { RiAlignCenter, RiFacebookFill } from "react-icons/ri";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  
  const [task, setTask] = useState([]);

  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleFormSubmit(inputValue) {

    // Check if the input field is empty or not
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    // setInputValue("");
  }
  

  function handleDeleteTask(value){
    // console.log(task);
    console.log(value);
    const updatedTask = task.filter((currentTask) => currentTask !== value);
    setTask(updatedTask);
  }

  function handleClearBtn(){
    setTask([]);
  }

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section
        id="todo-container"
        className=" flex flex-col items-center space-y-2"
      >
        
          <h1 className="text-5xl text-white font-bold mb-4">Todo List</h1>
          <TodoDate />
        
        <TodoForm onAddTodo = {handleFormSubmit}/>
        <section id="myTasks">
          <ul className="space-y-3">
            {task.map((currentTask, index) => {
              return (
                <TodoList key={index} 
                          data={currentTask} 
                          onHandleDeleteTask={handleDeleteTask}/>
              );
            })}
          </ul>
        </section>
        <section id="clearAll-btn"> 
          <button onClick={handleClearBtn} className="bg-red-600 text-white text-xl font-semibold px-4 py-2 rounded-md hover:scale-[1.05] focus:scale-[1.05] ">Clear All</button>
        </section>
      </section>
    </div>
  );
};
