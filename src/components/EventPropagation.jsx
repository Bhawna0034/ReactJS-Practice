export const EventPropagation = () => {
    function handleGrandParentClick(){
        console.log("GrandParent clicked!");
    }

    function handleParentClick(){
        console.log("Parent clicked!");
    }

    function handleChildClick(event){
        console.log(event);
        event.stopPropagation();
        console.log("Child clicked!");
    
        
    }
    return(
       <>
       {/* Bubbling Event */}
       <section className="flex items-center justify-center">
          <div className="border-4 border-black bg-sky-400 px-24 py-10" onClickCapture={handleGrandParentClick}>
            <div className="border-4 border-black bg-green-500 px-12 py-6 " onClickCapture={handleParentClick}>
                <button className="border-4 border-black bg-yellow-300 px-4 py-2" onClickCapture={handleChildClick}>Click Me</button>
            </div>
          </div>
       </section>
       </>
    )
}