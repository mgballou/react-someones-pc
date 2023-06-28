import { Link } from "react-router-dom"

function PokeImg({ pokemon }) {


    return (
        <div className="team-frame">
            <Link to={`/box/${pokemon._id}`} className='link'>
            <img className="team-sprite" src={pokemon.sprite} alt={pokemon.name} />

            </Link>


        </div>

    )
}


export default PokeImg