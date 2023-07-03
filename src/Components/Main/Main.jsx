import { Routes, Route } from 'react-router';

import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'
import Register from '../../Pages/Register'
import Box from '../../Pages/Box';
import Create from '../../Pages/Create';
import Pokemon from '../../Pages/Pokemon';
import Teams from '../../Pages/Teams';
import Team from '../../Pages/Team';

import './Main.css'

function Main(props) {

  

    return (
        <section className="main">
            <section className="width-container">

        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/box" element={<Box/>} />
            <Route path="/box/:id" element={<Pokemon/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/teams/:id" element={<Team/>} />
        </Routes>
            </section>
        </section>

    )
}

export default Main