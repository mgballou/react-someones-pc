import PokeTeamCard from "./components/PokeTeamCard";

import './ShowTeam.css'

function ShowTeam({members}){

    return (
        <div className="show-team-display">
        
        {members.map((member, index) => {
            return (
                <PokeTeamCard
                key={member._id}
                pokemon={member}
                index={index} 
                />
            )
        })}
        </div>
    )
}

export default ShowTeam