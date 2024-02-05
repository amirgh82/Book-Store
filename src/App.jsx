import { useState } from 'react'
import './App.css'
import { json, useRoutes } from 'react-router-dom'
import routes from './routes'
import AuthContext from './Contexts/authContext'

function App () {
  const router = useRoutes(routes)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState(null)

  const login = token => {
    setToken(token)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify({ token }))
  }

  const logout = () => {
    setToken(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user')
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logout
        }}
      >
        {router}
      </AuthContext.Provider>
    </>
  )
}

export default App
