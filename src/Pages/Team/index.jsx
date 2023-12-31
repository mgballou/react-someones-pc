import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"




import Loading from "../../Components/Loading/Loading"
import ChangeTeam from "../../Components/ChangeTeam/ChangeTeam";
import ShowTeam from "../../Components/ShowTeam/ShowTeam";

import { getTeam } from "../../utilities/team-services"

import './Team.css'
function Team(props) {
    const [teamData, setTeamData] = useState(null)
    const [otherPokemon, setOtherPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [editing, setEditing] = useState(false)



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

    function toggleEdit() {
        setEditing(!editing)

    }

    function loaded() {


        const lists = {
            members: teamData?.pokemon,
            others: otherPokemon
        }
        

        if (!teamData.pokemon[0] && !editing){
            return (
                <div className="small-banner first">
                    <p>Click edit to add members to your team</p>
                </div>
            )
        } else {

            return (
                <>
                    {editing ? <ChangeTeam
                        lists={lists}
                    /> : <ShowTeam
                        members={lists.members} />}
    
                </>
    
    
    
            )

        }

        

    }




    useEffect(() => { handleRequest() }, [isLoading])

    return (
        <>
            <div className="page-head">

                <p className="title"> Details</p>

            </div>
            <div className="banner">
                <button
                    onClick={toggleEdit}>{editing ? "View" : "Edit"}
                </button>

            </div>







            

            {isLoading ? <Loading /> : loaded()}

            




        </>
    )



}

export default Team