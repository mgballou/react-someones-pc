import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Loading from "../../Components/Loading/Loading"
import StatInfo from "../../Components/StatInfo/StatInfo"
import StatDetails from "../../Components/StatDetails/StatDetails"

import { getOne } from "../../utilities/poke-services"

import './Pokemon.css'

function Pokemon(props) {

    const [pokemonData, setPokemonData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [showStats, setShowStats] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

    async function handleRequest() {
        try {
            const foundPokemon = await getOne(id)

            if (foundPokemon._id) {
                setPokemonData(foundPokemon)
                setIsLoading(false)
            } else {
                navigate('/box')

            }

        } catch (error) {
            console.log(error)
        }
    }

    function handleSwitch(evt) {
        setShowStats(!showStats)
    }

    function loaded() {
        return (
            <>
                <section className="buttons-display">
                    {showStats ?
                        <button
                            onClick={handleSwitch}
                            >Moves</button> : 
                        <button
                            onClick={handleSwitch}
                            >Stats</button>}
                    <button>Release</button>
                </section>
                <section className="pokemon-display">
                    <div className="show-frame">
                        <img className="show-sprite" src={pokemonData.sprite} alt={pokemonData.name} />
                    </div>
                    <StatInfo pokemonData={pokemonData}/>
                </section>
                <section className="details-display">
                    <StatDetails stats={pokemonData.stats} />
                </section>
            </>


        )
    }


    useEffect(() => { handleRequest() }, [isLoading])



    return (
        <>
            <h1 className="title">Details</h1>
            <p className="subtitle">View and Update stats</p>



            {isLoading ? <Loading /> : loaded()}

        </>

    )


}

export default Pokemon