

const users = [
    {name: "Arjun Sharma", age: 27},
    {name: "Bhawna Sharma", age: 22},
    {name: "Deepak Sharma", age: 30},
    {name: "Hemant Sharma", age: 24},
    {name: "Sanya Sharma", age: 26},
    {name: "Sarthak Sharma", age: 29},
    {name: "Upasana Medhi", age: 29}
];

export const DerivedState = () => {
   
    return(
        <div>
            <h1>User's List </h1>
            <ul >
                {
                    users.map((currentElement, index) => {
                        return <>
                        <li key={index}>
                            {currentElement.name} - {currentElement.age} years old
                        </li>
                        </>
                    })
                }
            </ul>
        </div>
    );
}