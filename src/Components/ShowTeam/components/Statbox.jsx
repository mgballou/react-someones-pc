
import TeamStat from "./TeamStat"


function Statbox({stats}){





    return (
        <div>
            {stats.map((stat, index) => {
                return (
                    <TeamStat
                key={index}
                stat={stat}
                
                />

                )
                

            })}

        </div>
    )
}

export default Statbox