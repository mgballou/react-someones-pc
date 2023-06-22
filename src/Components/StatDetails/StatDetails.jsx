import { useState } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { updateStats } from "../../utilities/poke-services"

import Stat from "../Stat/Stat"

function StatDetails({ stats, setIsLoading }) {

    const [statForm, setStatForm] = useState({
        EV0: stats[0].values.effort,
        IV0: stats[0].values.individual,
        EV1: stats[1].values.effort,
        IV1: stats[1].values.individual,
        EV2: stats[2].values.effort,
        IV2: stats[2].values.individual,
        EV3: stats[3].values.effort,
        IV3: stats[3].values.individual,
        EV4: stats[4].values.effort,
        IV4: stats[4].values.individual,
        EV5: stats[5].values.effort,
        IV5: stats[5].values.individual,
        
    })

    const { id } = useParams()
    const navigate = useNavigate()

    const statComponents = stats?.map((stat, idx) => {
        return (
            <Stat
            key={idx}
            stat={stat}
            handleChange={handleChange}
            statForm={statForm}
            index={idx}            
            />
        )

    })

    function handleChange(evt){
        setStatForm({...statForm, [evt.target.name]: parseInt(evt.target.value) })
        

    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const updatedPokemon = await updateStats(stats, statForm, id )

            if (updatedPokemon._id){
                navigate(`/box/${updatedPokemon._id}`)
                // setIsLoading(true)
                setStatForm({
                    EV0: stats[0].values.effort,
                    IV0: stats[0].values.individual,
                    EV1: stats[1].values.effort,
                    IV1: stats[1].values.individual,
                    EV2: stats[2].values.effort,
                    IV2: stats[2].values.individual,
                    EV3: stats[3].values.effort,
                    IV3: stats[3].values.individual,
                    EV4: stats[4].values.effort,
                    IV4: stats[4].values.individual,
                    EV5: stats[5].values.effort,
                    IV5: stats[5].values.individual,
                })

            } else {
                navigate(`/box/${id}`)
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }

    return (
        <div>
            <form
            onSubmit={handleSubmit}>
            {statComponents}
            
            <button type="submit">Save Stats</button>

            </form>
        </div>
    )
}

export default StatDetails