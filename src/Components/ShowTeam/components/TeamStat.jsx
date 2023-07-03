function TeamStat({stat}){
    
    function calculateStat() {
        const { base,effort, individual, modifier } = stat.values
        const level = 100
      
        if (stat.statName === 'hp') {

            return Math.floor(((((2 * base) + individual + (effort / 4)) * level) / 100) + level + 10)

        } else {
            let adjustment = 1
            switch (modifier) {
                case 1:
                    adjustment = 1.1
                    break
                case -1:
                    adjustment = 0.9
            }
            return Math.floor((((((2 * base) + individual + (effort / 4)) * level) / 100) + 5) * adjustment)
        }

    }

    return (
        <div>
        {stat.statName}: {calculateStat()}
        </div>
    )
}

export default TeamStat