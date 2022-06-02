import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Listing from './components/Listing'
import BusinessDetails from './components/BusinessDetails'
import Login from './components/Login'
import AddBusiness from './components/AddBusiness'
import cookie from 'cookie'


const Router = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }
    // Check the cookies for a cookie called "loggedIn"
    
    
    // Write ProtectedRoute function here
    const ProtectedRoute = ({component: Component}) => {

        if(checkAuth())return <Component/>
        else return <Navigate to="/login"/>
      }

    return(
        <Routes> 
            <Route path='/' element={<Listing/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/add-business' element={<ProtectedRoute component={AddBusiness} />} />
            <Route path='/:id' element={<BusinessDetails/>} />
        </Routes>
    )
}
export default Router