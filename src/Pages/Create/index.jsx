import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import { createOne } from "../../utilities/poke-services"


function Create(props){
    const [createData, setCreateData] = useState({
        name: ""
    })
    const navigate = useNavigate()

    function handleChange(evt){
        setCreateData({ ...createData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newPokemon = await createOne(createData)

            if (newPokemon._id){
                navigate(`box/${newPokemon._id}`)
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
        <>
        <h2 className="title">Create</h2>
        <p className="subtitle">Enter the name or number of a Pokemon</p>
        <form

        onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={createData.name}/>
            <button type="submit">Create</button>

        </form>

        </>
    )

}

export default Create