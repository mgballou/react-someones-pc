import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import { login } from '../../utilities/auth-services';
import { setUserToken } from '../../utilities/auth-token';

import { UserContext } from '../../data';

function Login(props) {
    const [loginForm, setLoginForm] = useState(
        {
            username: "",
            password: ""
        })
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            
            const incomingUser = await login(loginForm)


            if (incomingUser.token) {
                navigate('/')
            
                setUserToken(incomingUser.token)
                setUser(incomingUser.user)
                setLoginForm({
                    username: "",
                    password: ""
                })

            } else {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)

        }
    }

    function handleChange(evt) {
        setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value })
    }

    async function loginGuest(evt) {
        const guestUser = {
            username: "demo_user1",
            password: "demo_user1"
        }

        try {
            
            const incomingUser = await login(guestUser)


            if (incomingUser.token) {
                navigate('/')
                setUserToken(incomingUser.token)
                setUser(incomingUser.user)
                setLoginForm({
                    username: "",
                    password: ""
                })

            } else {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)

        }
        
        
        

    }

    return (
        <>
            <div className="page-head">

                <p className='title'>Connect to Someone's PC</p>

            </div>

            <div className="form-wrapper">

                <div className="small-banner">
                    <p className="subtitle">Log In</p>
                </div>

                <form className=''
                    onSubmit={handleSubmit}>
                    <label className=''>username</label>
                    <input className=''
                        type="text"
                        name="username"
                        value={loginForm.username}
                        onChange={handleChange}
                    />
                    <label className='my-4'>password</label>
                    <input
                        className=''
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleChange}
                    />
                    <button className="" type="submit">Submit</button>
                    




                </form>

                <div className='small-banner inside'>
                        
                        <button onClick={loginGuest}>Continue as Guest</button>

                    </div>


            </div>



        </>
    )
}

export default Login