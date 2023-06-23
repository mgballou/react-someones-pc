import * as teamAPI from './team-api'

export async function createTeam(data) {
    try {
        const teamData = await teamAPI.create(data)
        return teamData

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }


}

export async function getAllTeams(){
    try {
        const teamData = await teamAPI.index(data)
        return teamData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function getTeam(id){
    try {
        const teamData = await teamAPI.getOne(id)
        
        return teamData

    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
    
}