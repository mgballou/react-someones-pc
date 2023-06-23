import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import { createPokemon } from "../../utilities/poke-services"


function NewPokemon(props){
    const [pokeData, setCreateData] = useState({
        name: ""
    })
    const navigate = useNavigate()

    function handleChange(evt){
        setCreateData({ ...pokeData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newPokemon = await createPokemon(pokeData)

            if (newPokemon._id){
                navigate(`/box/${newPokemon._id}`)
                setCreateData({
                    name: ""
                })

            } else {
                navigate('/create')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form

        onSubmit={handleSubmit}>
            <label>New Pokemon</label>
            <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={pokeData.name}/>
            <button type="submit">Create</button>

        </form>

    )

}

export default NewPokemon