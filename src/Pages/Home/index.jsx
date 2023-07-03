import { useContext } from "react"

import { UserContext } from '../../data'

import { Link } from "react-router-dom"


import './Home.css'


function Home(props) {

    const { user } = useContext(UserContext)


    return (
        <>
            <div className="page-head">
                <p className="title">Welcome, Trainer</p>
            </div>
            
            <div className="panel">
                <p className="main-text">Competitive Pokémon team planning made easy! Fully up-to-date with Generation 9, up to Pokédex number 1008.</p>
            </div>

            <div className="home">
                { !user ? <p className="body-text">New here? <Link to="/register" className="body-link">Create an account</Link> and log in, or <Link to="/login" className="body-link">use our guest account</Link> to explore features.</p> : <><p className="body-text">All the Pokémon you <Link to="/create" className="body-link">Create</Link> can be found in your <Link to="/box" className="body-link">Box</Link>. From there, click on a sprite to adjust that Pokémon’s stats.</p>
                <p className="body-text">Once you’ve got a squad ready, <Link to="/create" className="body-link">Create</Link> a new Team and drop in who you’d like to carry in your party.</p>
                <p className="body-text">Keep making changes, and make new <Link to="/teams" className="body-link">Teams</Link> to plan out different strategies and combinations. Save your plans and refer back between in-game sessions.</p></>}
                            </div>
        </>
    )
}

export default Home