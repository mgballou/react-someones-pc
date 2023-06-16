import { Routes, Route } from 'react-router';

import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'
import Register from '../../Pages/Register'
import Box from '../../Pages/Box';

import './Main.css'

function Main(props) {

  

    return (
        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/box" element={<Box/>} />
        </Routes>

    )
}

export default Main