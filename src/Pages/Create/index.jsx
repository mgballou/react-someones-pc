import { useState } from "react"


import NewPokemon from "../../Components/NewPokemon/NewPokemon"
import NewTeam from "../../Components/NewTeam/NewTeam"

function Create(props){

    const [createPokemon, setCreatePokemon] = useState(true)

    function switchMode(){
        setCreatePokemon(!createPokemon)
    }


    return (
        <>
        <h2 className="title">Create</h2>
        <p className="subtitle">Expand your collection</p>
        
        {createPokemon ? <button onClick={switchMode}>Build a Team</button> : <button onClick={switchMode}>Add a Pokemon</button>}
        
        

        {createPokemon ? <NewPokemon/> : <NewTeam/>}
   

        </>
    )

}

export default Create