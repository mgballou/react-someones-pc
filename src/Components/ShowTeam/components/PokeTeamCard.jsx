import PokeImg from "./PokeImg"
import Statbox from "./Statbox"


function PokeTeamCard({pokemon, index}){
    console.log(pokemon)
    console.log(index)

    
    
    
    if (index % 2 !== 0){
        return (
            <div>
                <Statbox 
                stats={pokemon.stats}/>
                <PokeImg 
                pokemon={pokemon}/>
            </div>
        )
    } else {
        return (
        <div>
                <PokeImg 
                pokemon={pokemon}/>
                <Statbox 
                stats={pokemon.stats}/>
            </div>
            
         )

    }
}

export default PokeTeamCard