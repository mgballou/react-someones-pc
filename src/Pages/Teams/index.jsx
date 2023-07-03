import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { getAllTeams } from '../../utilities/team-services';


import Loading from '../../Components/Loading/Loading'
import TeamCard from '../../Components/TeamCard/TeamCard';

import './Teams.css'

function Teams(props){

    const [allTeams, setAllTeams] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleRequest(){

        try {
            const foundTeams = await getAllTeams()
            
            setAllTeams(foundTeams)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
        }

    }

    function loaded(){
        return (
            allTeams?.map(team => {
                return (
               
                    
                    <TeamCard 
                    key={team._id} 
                    team={team}
                    />
            
                )
            })
        )
    }
    useEffect(() => { handleRequest() }, [isLoading])

    return (
        <>
        <div className="page-head">

        <p className='title'>Teams</p>
        

        </div>
        
        <section className='teams-display'>
            {isLoading ? <Loading /> : loaded()}
        </section>

        </>
    )


}

export default Teams