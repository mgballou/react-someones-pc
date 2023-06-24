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
        <div>
            {team.name}
            {teamSprites}
       </div>
    )
}

export default TeamCard