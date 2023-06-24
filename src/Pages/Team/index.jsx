import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


import Loading from "../../Components/Loading/Loading"
import ChangeTeam from "../../Components/ChangeTeam/ChangeTeam";

import { getTeam } from "../../utilities/team-services"

function ShowTeam(props) {
    const [teamData, setTeamData] = useState(null)
    const [otherPokemon, setOtherPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    // const [editing, setEditing] = useState(false)
    
    

    const { id } = useParams()
    const navigate = useNavigate()

    async function handleRequest() {
        try {
            const foundTeamData = await getTeam(id)

            if (foundTeamData.foundTeam._id) {
                setTeamData(foundTeamData.foundTeam)
                setOtherPokemon(foundTeamData.otherPokemon)
                setIsLoading(false)
            } else {
                navigate('/teams')
            }

        } catch (error) {
            console.log(error)

        }
    }

    function loaded(){
   

        const lists = {
            members: teamData.pokemon,
            others: otherPokemon
        }

        return (
            <ChangeTeam
            lists={lists}
            />

        )

    }

    


    useEffect(() => { handleRequest() }, [isLoading])

    return (
        <>
            <h1 className="title"> Details</h1>
            <p className="subtitle">Change Team Members</p>

            

            {isLoading ? <Loading /> : loaded()}
            
           


        </>
    )



}

export default Team