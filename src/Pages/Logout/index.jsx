import { useContext, useEffect } from 'react';

import { UserContext } from '../../data';

import { clearUserToken } from '../../utilities/auth-token';

function Logout(props){
    const {setUser} = useContext(UserContext)
    
    function clearUserInfo(){
        clearUserToken()
        setUser(null)
    }


    useEffect(() => {clearUserInfo()}, [])

    return (
        <section className="">
            <p>Successfully logged out</p>
        </section>
    )
}

export default Logout