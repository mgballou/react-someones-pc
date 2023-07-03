function StatInfo({pokemonData}){

    return (
        <div className="infobox">
            <p>{pokemonData.abilities.current}</p>
            <p>{pokemonData.type2 ? `${pokemonData.type1} / ${pokemonData.type2}` : `${pokemonData.type1}`}</p>
            {/* <p>{pokemonData.heldItem}</p> */}
        </div>
    )



}

export default StatInfo