import { Routes, Route } from 'react-router';

import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'

function Main(props) {

  

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
        </Routes>

    )
}

export default Main