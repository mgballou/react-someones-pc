
import { Link } from "react-router-dom"

import { useContext } from "react"

import { UserContext } from "../../data"

function Header(props) {

    const { user } = useContext(UserContext)

    return (
        <header>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </nav>
            {user ? `You are ${user.username}` : <></>}

        </header>
    )
}

export default Header