import './Stat.css'


function Stat({ stat, handleChange, index, statForm }) {

    function calculateStat() {
        const { base, modifier } = stat.values
        const level = 100
        const effort = statForm[`EV${index}`] || 0
        const individual = statForm[`IV${index}`] || 0

        

        if (stat.statName === 'hp') {

            // const output = Math.floor(((A+B+C) * D / 100) + D + 10)
            // console.log(output)
            // return output
            // return Math.floor((((((2 * base) + individual + (effort / 4)) * level) / 100) + level) + 10)
            // Math.floor(((((2 * base) + individual + (effort/4)) * level)/100) + level + 10)
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
        <div className="stat">
            <div className='stat-header' >
                <span className='stat-name'>
                    {stat.statName}

                </span>

                <span className='base'>
                    {stat.values.base}
                </span>
            </div>

            <div className="stat-input-row">
                <div>
                    <label>EV:</label>
                    <input
                        className="value"
                        type="number"
                        min="0"
                        max="255"
                        name={'EV' + index}
                        onChange={handleChange}
                        value={statForm[`EV${index}`]}>
                    </input>
                </div>
                <div >
                    <label>IV:</label>
                    <input
                        className="value"
                        type="number"
                        min="0"
                        max="31"
                        name={'IV' + index}
                        onChange={handleChange}
                        value={statForm[`IV${index}`]}></input>
                </div>

                <div className="total">
                    {calculateStat()}
                </div>

            </div>


        </div>
    )
}

export default Stat