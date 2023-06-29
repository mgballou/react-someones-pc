import PokeImg from "./PokeImg"
import Statbox from "./Statbox"

import './PokeTeamCard.css'

function PokeTeamCard({pokemon, index}){
    console.log(pokemon)
    console.log(index)

    
    
    
    if (index % 2 !== 0){
        return (
            <div className="poke-team-card">
                <div className="banner">{pokemon.name} - #{pokemon.dexNumber}</div>
                <div className="team-card-flex">
                <Statbox 
                stats={pokemon.stats}/>
                <PokeImg 
                pokemon={pokemon}/>
                </div>
            </div>
        )
    } else {
        return (
        <div className="poke-team-card">
            <div className="banner">{pokemon.name} - #{pokemon.dexNumber}</div>
            <div className="team-card-flex">
            <PokeImg 
                pokemon={pokemon}/>
                <Statbox 
                stats={pokemon.stats}/>

            </div>
               
            </div>
            
         )

    }
}

export default PokeTeamCard