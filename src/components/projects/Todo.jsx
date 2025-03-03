import { useEffect, useState } from "react";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  //another state for storing task
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  }
  

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval)
  }, []);
    

  

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section
        id="todo-container"
        className=" flex flex-col items-center space-y-4"
      >
        
          <h1 className="text-5xl text-white font-bold">Todo List</h1>
          <h2 className="text-xl text-white font-bold">{dateTime}</h2>
        
        <section id="form">
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center rounded-xl bg-white mb-6"
          >
            <div className="px-8" >
              <input
                type="text"
                id="todo-input"
                className=" focus:outline-none text-black  text-md py-2"
                autoComplete="off"
                value={inputValue}
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
        <section id="myTasks">
          <ul className="space-y-3">
            {task.map((currentTask, index) => {
              return (
                <li
                  key={index}
                  className="bg-white rounded-xl w-[360px] px-8 py-3 flex  items-center justify-between  font-semibold"
                >
                  <span className="text-xl">{currentTask}</span>
                  <div className="flex gap-2 items-center justify-between">
                    <button id="check-btn ">
                      <FaCheckSquare className="text-2xl text-[#22c55e]" />
                    </button>
                    <button id="edit-btn">
                        <FaEdit className="text-2xl text-[#002E55]"/></button>
                    <button id="delete-btn">
                      <MdDelete className="text-2xl text-red-600" />
                    </button>
                    
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
};
