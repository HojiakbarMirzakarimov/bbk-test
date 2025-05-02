import React from 'react'
import Login from './Login/Login'
import useToken from './Login/store/useToken'
import HomeRoute from './HomeRoute/HomeRoute'

export default function Layout() {
  
  const {token} = useToken()

  if(!token) {
    return  <Login/>

    
  }
 return <HomeRoute />
}
