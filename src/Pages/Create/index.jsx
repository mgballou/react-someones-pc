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
        <div className="page-head">
        <p className="title">Create</p>
        </div>
        
        
        {createPokemon ? <button onClick={switchMode}>Build a Team</button> : <button onClick={switchMode}>Add a Pokemon</button>}
        
        

        {createPokemon ? <NewPokemon/> : <NewTeam/>}
   

        </>
    )

}

export default Create