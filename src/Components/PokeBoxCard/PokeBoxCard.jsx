import './PokeBoxCard.css'

function PokeBoxCard({pokemon}){


    return (
        
            <div className="frame">
            <img className="sprite" src={pokemon.sprite} alt={pokemon.name}/>
            </div>
           
    )
}

export default PokeBoxCard