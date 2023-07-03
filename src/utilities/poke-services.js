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

export async function createPokemon(data){
    try {
        const pokeData = await pokeAPI.create(data)
        return pokeData

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function getPokemon(id){
    try {
        const pokeData = await pokeAPI.getOne(id)
        return pokeData

    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
    
}

export async function updateStats(stats, data, id){
    const submission = {
        stats: stats.map((stat, index) => {
            stat.values.effort = data[`EV${index}`]
            stat.values.individual = data[`IV${index}`]
            return stat
        })

    }


    try {
        const pokeData = await pokeAPI.updateOne(submission, id)
        return pokeData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function deletePokemon(id){
    try {
        const pokeData = await pokeAPI.deleteOne(id)
        return pokeData

    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }

}