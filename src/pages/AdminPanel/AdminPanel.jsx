import React from 'react'
import './AdminPanel.css'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'
import { Outlet } from 'react-router-dom'
export default function AdminPanel () {
  return (
    <div id='content'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='home' id='home '>
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
