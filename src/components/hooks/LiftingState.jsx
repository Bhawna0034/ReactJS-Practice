import { useState } from "react"

const ParentComponent = () => {
    const[message, setMessage] = useState('');
    return(
        <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
            <h2 className="text-2xl fontbold">Lifting State</h2>
            <InputBox message={message} setMessage = {setMessage}/>
            <MessageDisplay message={message}/>
        </div>
    );
}

export default ParentComponent;

const InputBox = ({message, setMessage}) => {
   return(
     <div>
        <input type="textarea" 
               value={message}
               onChange={(event) => setMessage(event.target.value)}
               placeholder="Type of message here"
               className="w-80 h-10 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
     </div>
   );
} 

const MessageDisplay = ({message}) => {
    return(
        <div>
            <p>Message: {message}</p>
        </div>
    )
}
