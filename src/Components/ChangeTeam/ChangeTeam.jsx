import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"


import { updateTeam } from "../../utilities/team-services"

import './ChangeTeam.css'

function ChangeTeam({ lists }) {

    const [members, setMembers] = useState(lists.members)
    const [others, setOthers] = useState(lists.others)

    const navigate = useNavigate()

    const { id } = useParams()

    function handleDragEnd(result) {
        console.log(result)
        if (!result.destination) return;
        const { source, destination } = result;
        if (destination.droppableId == "members" && members.length > 5) return;
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
            console.log(updatedTeam)

            if (!updatedTeam._id) {
                navigate(`/teams/${id}`)
            }

        } catch (error) {
            console.log(error)

        }
    }







    return (
        <>
            <DragDropContext
                onDragEnd={result => handleDragEnd(result)}>
                <div className="small-banner first" >
                    <p className="subtitle">Team Members</p>
                </div>
                <Droppable droppableId="members" >
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={snapshot.isDraggingOver ? "members-container active" : "members-container"}>
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
                                                        className={snapshot.isDragging ? "members-frame active" : "members-frame"}>
                                                        <img className="members-sprite" src={pokemon.sprite} alt={pokemon.name} />
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


                <div className="small-banner">
                    <p className="subtitle">Other Pokemon</p>

                </div>


                <Droppable droppableId="others" >
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={snapshot.isDraggingOver ? "others-container" : "others-container active"}>
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
                                                        className={snapshot.isDragging ? "others-frame active" : "others-frame"}>
                                                        <img className="others-sprite" src={pokemon.sprite} alt={pokemon.name} />
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