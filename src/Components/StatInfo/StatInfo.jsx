function StatInfo({pokemonData}){

    return (
        <div>
            <p>{pokemonData.abilities.current}</p>
            <p>{pokemonData.heldItem}</p>
            <p>{pokemonData.type2 ? `${pokemonData.type1} / ${pokemonData.type2}` : `${pokemonData.type1}`}</p>
        </div>
    )



}

export default StatInfo