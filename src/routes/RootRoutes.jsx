/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from '../components/common/NavBar'

function RootRoutes() {
  return (
    
    <Routes>
        <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Outlet />} />
        </Route>
    </Routes>
  )
}

export default RootRoutes