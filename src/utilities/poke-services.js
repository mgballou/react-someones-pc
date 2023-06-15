import * as pokeAPI from './poke-api'

export async function getAllPokemon(){
    try {
        const pokeData = await pokeAPI.index()
        return pokeData

    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
    
}