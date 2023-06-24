function PokeImg({pokemon}){


    return (
        <div className="frame">
                
            <img className="sprite" src={pokemon.sprite} alt={pokemon.name}/>
                
            </div>

    )
}


export default PokeImg