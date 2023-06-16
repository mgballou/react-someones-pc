
import { Link } from "react-router-dom"

import { useContext } from "react"

import { UserContext } from "../../data"

import './Header.css'

function Header(props) {

    const { user } = useContext(UserContext)

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home
                        
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login
                        
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout">Logout
                        
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register">Register
                        
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/box">Box
                        
                        </Link>
                    </li>

                </ul>

                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/register">Register</Link>

            </nav>
            {user ? `You are ${user.username}` : <></>}

        </header>
    )
}

export default Header