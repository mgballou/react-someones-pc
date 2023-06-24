import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"


import { getTeam, updateTeam } from "../../utilities/team-services"

function ChangeTeam({ lists }) {

    // const [teamData, setTeamData] = useState(null)
    // const [otherPokemon, setOtherPokemon] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)

    const [members, setMembers] = useState(lists.members)
    const [others, setOthers] = useState(lists.others)


    const navigate = useNavigate()

    const { id } = useParams()

    function handleDragEnd(result) {
        console.log(result)
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId == destination.droppableId) return;

        const sourceItems = (source.droppableId == "members") ? members : others
        const destItems = (source.droppableId == "members") ? others : members

        // const sourceItems = (source.droppableId == "members") ? memberArray : othersArray
        // const destItems = (source.droppableId == "members") ? othersArray : memberArray

        const [removed] = sourceItems.splice(source.index, 1);

        destItems.splice(destination.index, 0, removed);

        if (source.droppableId == "members") {

            setMembers(sourceItems)
            setOthers(destItems)
        } else {

            setMembers(destItems)
            setOthers(sourceItems)
        }

        handleSubmit()


    }

    async function handleSubmit() {
        const newMemberArray = members.map(member => {
            return member._id
        })
        console.log(newMemberArray)

        try {
            const updatedTeam = await updateTeam(newMemberArray, id)

            if (updatedTeam._id) {
                console.log(updatedTeam)
            }

        } catch (error) {
            console.log(error)

        }
    }







    return (
        <>
            <DragDropContext
                onDragEnd={result => handleDragEnd(result)}>
                <Droppable droppableId="members" >
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={snapshot.isDraggingOver ? "container active" : "container"}>
                                {members.map((pokemon, index) => {
                                    return (
                                        <Draggable
                                            key={pokemon._id}
                                            draggableId={pokemon._id}
                                            index={index}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: "none",
                                                            ...provided.draggableProps.style
                                                        }}
                                                        className={snapshot.isDragging ? "show-frame active" : "show-frame"}>
                                                        <img className="show-sprite" src={pokemon.sprite} alt={pokemon.name} />
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
                <p>Other Pokemon</p>
                <Droppable droppableId="others" >
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={snapshot.isDraggingOver ? "container" : "container active"}>
                                {others.map((pokemon, index) => {
                                    return (
                                        <Draggable
                                            key={pokemon._id}
                                            draggableId={pokemon._id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: "none",
                                                            ...provided.draggableProps.style
                                                        }}
                                                        className={snapshot.isDragging ? "show-frame active" : "show-frame"}>
                                                        <img className="show-sprite" src={pokemon.sprite} alt={pokemon.name} />
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default ChangeTeam