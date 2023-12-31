import './PokeBoxCard.css'

import { Link } from 'react-router-dom'

function PokeBoxCard({pokemon}){



    return (
        
            <div className="frame">
                <Link to={`/box/${pokemon._id}`} className='link'>
            <img className="sprite" src={pokemon.sprite} alt={pokemon.name}/>
                </Link>
            </div>
           
    )
}

export default PokeBoxCard