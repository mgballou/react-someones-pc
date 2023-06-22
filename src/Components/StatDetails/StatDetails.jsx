import { useState } from "react"

import Stat from "../Stat/Stat"

function StatDetails({ stats }) {

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
            
        } catch (error) {
            
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