import profileData from '../api/profileData.json'
import ProfileCard from './ProfileCard'

export default function Profile(){
    return(
        <ul>
            {profileData.map((currentElement) => {
                return <ProfileCard key={currentElement.id} data = {currentElement}/>
            })}
        </ul>
    )

}