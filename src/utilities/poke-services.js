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

export async function createOne(data){
    try {
        const pokeData = await pokeAPI.create(data)
        return pokeData

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}