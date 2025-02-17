// import profileData from '../api/profileData.json'
// import ProfileCard from './ProfileCard'

// export default function Profile(){
//     return(
//         <ul>
//             {profileData.map((currentElement) => {
//                 return <ProfileCard key={currentElement.id} data = {currentElement}/>
//             })}
//         </ul>
//     )

// }

function ProfileCard({ name, age, designation, greetingMessage}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Designation: {designation}</p>
      <p>{greetingMessage()}</p>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <ProfileCard name="Bhawna" age={22} designation="Frontend Developer"
       greetingMessage = {() => <em>Welcome to React👋</em>}>
       
      </ProfileCard>
    </div>
  );
}
