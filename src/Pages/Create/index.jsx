import { useState } from "react"


function Create(props){
    const [createData, setCreateData] = useState({
        name: ""
    })

    function handleChange(evt){
        setCreateData({ ...createData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            
        } catch (error) {
            
        }

    }

    return (
        <>
        <h2 className="title">Create</h2>
        <p className="subtitle">Enter the name or number of a Pokemon</p>
        <form

        onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={createData.name}/>

        </form>

        </>
    )

}

export default Create