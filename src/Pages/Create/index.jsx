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
        <div className="form-wrapper">
            <div className='small-banner inside'>
        {createPokemon ? <><button onClick={switchMode}>Build a Team</button>
        <p>Enter the number or name of any Pokemon (spelling counts)</p> </>: <><button onClick={switchMode}>Add a Pokemon</button>
        <p>Enter a name for your next team</p></>}

            </div>

            
        {createPokemon ? <NewPokemon/> : <NewTeam/>}

            </div>
        
        
        

   

        </>
    )

}

export default Create