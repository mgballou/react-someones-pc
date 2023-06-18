import { useState } from 'react';
import { UserContext } from '../data';

import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';

import './App.css'



function App() {

  const { Provider: UserInfo } = UserContext
  const [currentUser, setCurrentUser] = useState(null)
  

  return (
    <>
      <UserInfo value={{
        user: currentUser,
        setUser: setCurrentUser
      }}>
        <Header />
        <Main />
      </UserInfo>
    </>
  )
}

export default App
