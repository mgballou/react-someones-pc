import { useState, useEffect } from 'react';

import { getAllPokemon } from '../../utilities/poke-services';

import Loading from '../../Components/Loading/Loading'
import PokeBoxCard from '../../Components/PokeBoxCard/PokeBoxCard'

import './Box.css'


function Box(props) {
    const [ allPokemon, setAllPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    async function handleRequest(){

        try {
            const foundPokemon = await getAllPokemon()
            
            setAllPokemon(foundPokemon)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
        }

    }

    function loaded(){
        return allPokemon?.map(item => {
            return (
                <PokeBoxCard
                key={item._id}
                pokemon={item}
                />
                
            )
        })
    }

    useEffect(() => { handleRequest() }, [isLoading])



    return (
        <>
        <div className="page-head">
        <p className='title'>Box</p>
        </div>
        


        <section className='box-display'>
            {isLoading ? <Loading /> : loaded()}
        </section>
        </>
        
       
    )
}

export default Box