function PokeBoxCard({pokemon}){


    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprite} alt={pokemon.name}/>
        </div>
    )
}

export default PokeBoxCard