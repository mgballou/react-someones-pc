import PokeImg from "./PokeImg"
import Statbox from "./Statbox"

import './PokeTeamCard.css'

function PokeTeamCard({pokemon, index}){
    console.log(pokemon)
    console.log(index)

    
    
    
    if (index % 2 !== 0){
        return (
            <div className="poke-team-card">
                <Statbox 
                stats={pokemon.stats}/>
                <PokeImg 
                pokemon={pokemon}/>
            </div>
        )
    } else {
        return (
        <div className="poke-team-card">
                <PokeImg 
                pokemon={pokemon}/>
                <Statbox 
                stats={pokemon.stats}/>
            </div>
            
         )

    }
}

export default PokeTeamCard