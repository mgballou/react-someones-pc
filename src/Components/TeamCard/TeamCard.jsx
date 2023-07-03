import { Link } from 'react-router-dom'

import "./TeamCard.css"

function TeamCard({team}){

    const teamSprites = team.pokemon.map(pokemon => {
        return (
            <div 
            key={pokemon._id}
            className="frame">
                
            <img className="sprite" src={pokemon.sprite} alt={pokemon.name}/>
                
            </div>
            
        )
    })

    return (
        <div className="team-card">
            <div className='banner'>
            <p className='subtitle'>{team.name}</p>
            </div>
            <Link 
                to={`/teams/${team._id}`}>

            <div className="sprite-container">
            {teamSprites}

            </div>
            </Link>
       </div>
    )
}

export default TeamCard