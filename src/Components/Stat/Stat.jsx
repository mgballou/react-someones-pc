function Stat({stat, handleChange, index, statForm}){
    
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

        <p>{999}</p>
        </>
    )
}

export default Stat