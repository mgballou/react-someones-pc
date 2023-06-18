import { getUserToken } from "./auth-token"

const BASE_URL = import.meta.env.VITE_POKEMON_URL;


export async function index(){
    try {

        const options = {

            method: 'GET',
            headers: {

                "Authorization": `bearer ${getUserToken()}`
            }
        }

        const response = await fetch(BASE_URL, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
        
    } catch (error) {
        console.log(error)
        return error
        
    }
}