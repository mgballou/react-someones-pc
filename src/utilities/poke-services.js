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

export async function getOne(data){
    try {
        const pokeData = await pokeAPI.getOne(data)
        console.log(pokeData)
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