function Stat({stat, handleChange, index, statForm}){
    
    function calculateStat(){
        const { base, modifier } = stat.values
        const level = 100
        const effort = statForm[`EV${index}`] || 0
        const individual = statForm[`IV${index}`] || 0

        const A = 2 * base
        const B = individual
        const C = effort / 4
        const D = level

        console.log(A, B, C, D)

        if (stat.statName === 'hp'){
            
            // const output = Math.floor(((A+B+C) * D / 100) + D + 10)
            // console.log(output)
            // return output
            // return Math.floor((((((2 * base) + individual + (effort / 4)) * level) / 100) + level) + 10)
            // Math.floor(((((2 * base) + individual + (effort/4)) * level)/100) + level + 10)
            return Math.floor(((((2 * base) + individual + (effort/4)) * level)/100) + level + 10)

        } else {
            let adjustment = 1
            switch (modifier){
                case 1:
                    adjustment = 1.1
                    break
                case -1:
                    adjustment = 0.9
            }
            return Math.floor((((((2 * base) + individual + (effort/4)) * level)/100) + 5) * adjustment)
        }

    }
    
    return (
        <>
        <h4>{stat.statName}</h4>
        <p>Base: {stat.values.base}</p>

        <label>EV:</label>
        <input
        type="number"
        min="0"
        max="255"
        name={'EV' + index}
        onChange={handleChange}
        value={statForm[`EV${index}`]}>

        </input>

        <label>IV:</label>
        <input
        type="number"
        min="0"
        max="31"
        name={'IV' + index}
        onChange={handleChange}
        value={statForm[`IV${index}`]}></input>

        <p>{calculateStat()}</p>
        </>
    )
}

export default Stat