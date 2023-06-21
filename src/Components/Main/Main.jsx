import { Routes, Route } from 'react-router';

import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'
import Register from '../../Pages/Register'
import Box from '../../Pages/Box';
import Create from '../../Pages/Create';
import Pokemon from '../../Pages/Pokemon';

import './Main.css'

function Main(props) {

  

    return (
        <section className="main">
        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/box" element={<Box/>} />
            <Route path="/box/:id" element={<Pokemon/>} />
            <Route path="/create" element={<Create/>} />
        </Routes>
        </section>

    )
}

export default Main