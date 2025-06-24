import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const DashboradeLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[60px_1fr] h-screen">
    <Header/>
    <Sidebar/>
     <main className="flex-1 p-6  overflow-auto">
      <Outlet/>
     </main>
     </div>
  )
}

export default DashboradeLayout