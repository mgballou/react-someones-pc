function StatInfo({pokemonData}){

    return (
        <div className="infobox">
            <div>
            <p>TYPE:</p>   
            <p>{pokemonData.type2 ? `${pokemonData.type1.toUpperCase()} / ${pokemonData.type2.toUpperCase()}` : `${pokemonData.type1.toUpperCase()}`}</p>
            </div>
            <div>
                <p>ABILITY:</p>
            <p>{pokemonData.abilities.current.toUpperCase()}</p>

            </div>
            {/* <p>{pokemonData.heldItem}</p> */}
        </div>
    )



}

export default StatInfo