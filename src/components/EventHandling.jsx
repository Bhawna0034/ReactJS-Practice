export const EventHandling = () => {
    function handleButtonClick(event){
        console.log(event);
        alert('Button Clicked');
        console.log(event.type)

    }

     const welcome = (name) => {
        alert(`Hello, ${name}`);
     }
    return(
        <div className="flex  gap-4 items-center justify-center mt-56">

        {/* Event handler without passing any arguments */}
        <button onClick={handleButtonClick} className="border-2 border-black bg-teal-500 px-4 py-2 font-bold">Click Me!</button>

        {/* Inline Event Handlers */}
        <button onClick={(event) => handleButtonClick(event)} className="border-2 border-black bg-purple-600 px-4 py-2 font-bold">Click Me 2!</button>

        {/* Function components with Inline Arrow Functions */}
        <button onClick={() => alert("Hey I am inline event function")} className="border-2 border-black bg-orange-400 px-4 py-2 font-bold"> Inline Arrow Function</button>

        {/* Passing Arguments to Event Handlers */}
        <button onClick={() => welcome('Bhawna')} className="border-2 border-black bg-pink-500 px-4 py-2 font-bold">Login</button>
        </div>
    )
} 