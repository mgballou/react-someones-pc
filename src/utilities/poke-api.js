import { getUserToken } from "./auth-token"

const BASE_URL = import.meta.env.VITE_POKEMON_URL;


export async function index() {
    try {

        const options = {

            method: 'GET',
            headers: {

                "Authorization": `bearer ${getUserToken()}`
            }
        }

        const response = await fetch(BASE_URL, options)

        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }

    } catch (error) {
        console.log(error)
        return error

    }
}

export async function create(data) {
    try {

        const options = {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${getUserToken()}`
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(BASE_URL, options)
        

        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }

    } catch (error) {
        console.log(error)
        return error

    }
}

export async function getOne(data) {
    try {

        const options = {

            method: 'GET',
            headers: {
                'Content-Type': 'text/plain',
                "Authorization": `bearer ${getUserToken()}`
            },
            redirect: 'follow'
        }

        const URL = BASE_URL + `/${data}`
        

        const response = await fetch(URL, options)
        
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }

    } catch (error) {
        console.log(error)
        return error

    }
}

export async function updateOne(data, id){
    try {

        const options = {

            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${getUserToken()}`
            },
            body: JSON.stringify(data)
        }
        const URL = BASE_URL + `/${id}`

        const response = await fetch(URL, options)
        
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
        
    } catch (error) {

        console.log(error)
        return error
        
    }
}

export async function deleteOne(id){
    
    try {

        const options = {

            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain',
                "Authorization": `bearer ${getUserToken()}`
            },
            redirect: 'follow'
        }

        const URL = BASE_URL + `/${id}`
        

        const response = await fetch(URL, options)
        
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }

    } catch (error) {
        console.log(error)
        return error

    }

}