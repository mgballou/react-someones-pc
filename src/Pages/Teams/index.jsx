import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { getAllTeams } from '../../utilities/team-services';
import Loading from '../../Components/Loading/Loading'

function Teams(props){

    const [allTeams, setAllTeams] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleRequest(){

        try {
            const foundTeams = await getAllTeams()
            
            setAllTeams(foundTeams)
            console.log(allTeams)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
        }

    }

    function loaded(){
        return (
            allTeams?.map(team => {
                return (
                <Link 
                key={team._id} 
                to={`/teams/${team._id}`}>{team.name}
                </Link>
                )
            })
        )
    }
    useEffect(() => { handleRequest() }, [isLoading])

    return (
        <>
        <h2 className='title'>Teams</h2>
        <p className='subtitle'>Prepare for battle</p>
        
        <section className='teams-display'>
            {isLoading ? <Loading /> : loaded()}
        </section>

        </>
    )


}

export default Teams