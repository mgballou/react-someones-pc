import PokeTeamCard from "./components/PokeTeamCard";

import './ShowTeam.css'

function ShowTeam({members}){

    return (
        <>
        
        {members.map((member, index) => {
            return (
                <PokeTeamCard
                key={member._id}
                pokemon={member}
                index={index} 
                />
            )
        })}
        </>
    )
}

export default ShowTeam