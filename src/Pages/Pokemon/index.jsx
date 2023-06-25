import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Loading from "../../Components/Loading/Loading"
import StatInfo from "../../Components/StatInfo/StatInfo"
import StatDetails from "../../Components/StatDetails/StatDetails"

import { getPokemon, deletePokemon } from "../../utilities/poke-services"

import './Pokemon.css'

function Pokemon(props) {

    const [pokemonData, setPokemonData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [showStats, setShowStats] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

    async function handleRequest() {
        try {
            const foundPokemon = await getPokemon(id)

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

    async function handleRelease(){
        try {
            const deletedPokemon = await deletePokemon(id)
            console.log(deletedPokemon)

            if (deletedPokemon) {
                setPokemonData(null)
                setIsLoading(true)
                navigate('/box')
            } else {
                navigate(`/box/${id}`)
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function loaded() {
        return (
            <>
                <section className="buttons-display">
                    {/* {showStats ?
                        <button
                            onClick={handleSwitch}
                            >Moves</button> : 
                        <button
                            onClick={handleSwitch}
                            >Stats</button>} */}
                    <button onClick={handleRelease}>Release</button>
                </section>
                <section className="pokemon-display">
                    <div className="show-frame">
                        <img className="show-sprite" src={pokemonData.sprite} alt={pokemonData.name} />
                    </div>
                    <StatInfo pokemonData={pokemonData}/>
                </section>
                <section className="details-display">
                    <StatDetails stats={pokemonData.stats} setIsLoading={setIsLoading} />
                </section>
            </>


        )
    }


    useEffect(() => { handleRequest() }, [isLoading])



    return (
        <>
            <h1 className="title">{pokemonData?.name || "Details"}</h1>
            <p className="subtitle">View and Update stats</p>



            {isLoading ? <Loading /> : loaded()}

        </>

    )


}

export default Pokemon