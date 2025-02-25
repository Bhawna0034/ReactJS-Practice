import { useState } from "react";

// const users = [
//   { name: "Arjun Sharma", age: 27 },
//   { name: "Bhawna Sharma", age: 22 },
//   { name: "Deepak Sharma", age: 30 },
//   { name: "Hemant Sharma", age: 24 },
//   { name: "Sanya Sharma", age: 26 },
//   { name: "Sarthak Sharma", age: 29 },
//   { name: "Upasana Medhi", age: 29 },
// ];

export const DerivedState = () => {
  const [users, setUser] = useState([
    { name: "Arjun Sharma", age: 27 },
    { name: "Bhawna Sharma", age: 22 },
    { name: "Deepak Sharma", age: 30 },
    { name: "Hemant Sharma", age: 24 },
    { name: "Sanya Sharma", age: 26 },
    { name: "Sarthak Sharma", age: 29 },
    { name: "Upasana Medhi", age: 29 },
  ]);
  return (
    <div>
      <h1>User's List </h1>
      <ul>
        {users.map((currentElement, index) => {
          return (
            <>
              <li key={index}>
                {currentElement.name} - {currentElement.age} years old
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export function UserProfile(){
    const [user, setUser] = useState({
        name: 'Bhawna Sharma',
        age: 22,
        email: 'bhawna@gmail.com',
        address:{
            city: 'Yamuna Nagar',
            pincode: '135001'
        }
    });

    const updateName = () => {
        setUser({
            ...user,
            name: 'Hemant Sharma'
        });
    };

    // const updatedCity = () => {
    //     setUser({
    //         ...user,
    //         address: {
    //             ...user.address,
    //             city: 'Pune'
    //         }
    //     });
    // }

    return(
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={updateName} className="bg-teal-500 px-4 py-2 border-4 border-black rounded-lg">Change Name</button>
        </div>
    )
}
