import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';


import { register } from '../../utilities/auth-services';
import { setUserToken } from '../../utilities/auth-token';

import { UserContext } from '../../data';

function Register(props) {
    const [registerForm, setRegisterForm] = useState(
        {
            username: "",
            password: ""
        })
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const newUser = await register(registerForm)



            if (newUser.token) {
                navigate('/')
                setUserToken(newUser.token)
                setUser(newUser.user)
                setRegisterForm({
                    username: "",
                    password: ""
                })

            } else {
                navigate('/register')
            }

        } catch (error) {
            console.log(error)

        }
    }

    function handleChange(evt) {
        setRegisterForm({ ...registerForm, [evt.target.name]: evt.target.value })
    }

    return (
        <>
            <div className="page-head">

                <p className='title'>Create an account</p>

            </div>

            <div className="form-wrapper">
                <div className="small-banner">
                    <p className="subtitle">Register</p>
                </div>


            <form
                className=''
                onSubmit={handleSubmit}>
                <label className=''>username</label>
                <input
                    className=''
                    type="text"
                    name="username"
                    value={registerForm.username}
                    onChange={handleChange}
                />
                <label className=''>password</label>
                <input
                    className=''
                    type="password"
                    name="password"
                    value={registerForm.password}
                    onChange={handleChange}
                />
                <button className="" type="submit">Sign Up</button>

            </form>


            </div>
            

        </>
    )
}

export default Register