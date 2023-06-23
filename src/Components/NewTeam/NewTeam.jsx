import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import { createTeam } from "../../utilities/team-services";


function NewTeam(props){
    const [teamData, setCreateData] = useState({
        name: ""
    })
    const navigate = useNavigate()

    function handleChange(evt){
        setCreateData({ ...teamData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newTeam = await createTeam(teamData)

            if (newTeam._id){
                navigate(`/teams/${newTeam._id}`)
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
            <label>New Team</label>
            <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={teamData.name}/>
            <button type="submit">Create</button>

        </form>

    )

}

export default NewTeam