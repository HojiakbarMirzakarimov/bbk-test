import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import RoutePage from './components/RoutePage/RoutePage'

export default function HomeRoute() {
  return (
    <div className='main'>
      <Sidebar />
      <div className='routes_pages'>  <RoutePage /> </div>
    </div>
  )
}
