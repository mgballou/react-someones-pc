import { useState, useEffect } from "react"

import Loading from "../../Components/Loading/Loading"

function Pokemon(props){

    const [pokemonData, setPokemonData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    async function handleRequest(){
        try {
            const foundPokemon = await detail(id)

            if (foundPokemon._id){
                setPokemonData(foundPokemon)
                setIsLoading(false)
            } else {
                
            }
            
        } catch (error) {
            
        }
    }




    
    return (
        <>
        
        </>

    )
}