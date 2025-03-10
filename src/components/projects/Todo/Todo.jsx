import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {

  const [task, setTask] = useState(() => getLocalStorageTodoData());
  const [inputValue, setInputValue] = useState({});
  const [editing, setEditing] = useState(false);
  const [edit, setEdit] = useState(null);

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    // Check if the input field is empty or not
    if (!content) return;

    if(content.trim() && edit !== null){
      let updatedTask = task.map((element, index) => index === edit? {...element, content} : element);
      setTask(updatedTask);
      setEditing(false);
      setEdit(null);
      setInputValue({...content});
      return;
    }

    // Check if the task is already existing or not
    const ifTodoContentMatched = task.find(
      (currentTask) => currentTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }

  function handleCheckedTask(content) {
    const updatedTask = task.map((currentTask) => {
      if (currentTask.content === content) {
        return { ...currentTask, checked: !currentTask.checked };
      } else {
        return currentTask;
      }
    });
    setTask(updatedTask);
  }

  function handleDeleteTask(value) {
    // console.log(task);
    console.log(value);
    const updatedTask = task.filter(
      (currentTask) => currentTask.content !== value
    );
    setTask(updatedTask);
  }

  function handleEditTask(content){
    console.log("Editing Task: ", content);
    const index = task.findIndex((task) =>task.content === content );
    if(index === -1) return;
    console.log(content);
    setEditing(true);
    setEdit(index);
    setInputValue(task[index]);
    
  }

  function handleClearBtn() {
    setTask([]);
  }

  // added data inside localStorage
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section
        id="todo-container"
        className=" flex flex-col items-center space-y-2"
      >
        <h1 className="text-5xl text-white font-bold mb-4">Todo List</h1>
        <TodoDate />

        <TodoForm 
                  inputValue = {inputValue}
                  setInputValue = {setInputValue}
                  editing = {editing}
                  setEditing = {setEditing}
                  onAddTodo={handleFormSubmit} />

        <section id="myTasks">
          <ul className="space-y-3">
            {task.map((currentTask) => {
              return (
                <TodoList
                  key={currentTask.id}
                  data={currentTask.content}
                  checked={currentTask.checked}
                  onHandleDeleteTask={handleDeleteTask}
                  onHandleCheckedTask={handleCheckedTask}
                  onHandleEditTask={handleEditTask}
                />
              );
            })}
          </ul>
        </section>
        <section id="clearAll-btn">
          <button
            onClick={handleClearBtn}
            className="bg-red-600 text-white text-xl font-semibold px-4 py-2 rounded-md hover:scale-[1.05] focus:scale-[1.05] "
          >
            Clear All
          </button>
        </section>
      </section>
    </div>
  );
};
