const todoID = "todos";
export const getLocalStorageTodoData = () => {
    const rawTodo = localStorage.getItem(todoID);
    if(!rawTodo || rawTodo === "undefined") return [];
    return JSON.parse(rawTodo);
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todoID, JSON.stringify(task));
}