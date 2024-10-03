import React from 'react'
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import About from '../pages/About'
import TourPage from "../pages/Tourpage"
import TourDetails from "../pages/Tourdetails"
import Searchresult from '../pages/Searchresult'
import Login from "../pages/Login"
import Register from "../pages/Register"
import Thankyou from '../pages/Thankyou'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tours' element={<TourPage />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/tours/search' element={<Searchresult />} />
            <Route path='/thankyou' element={<Thankyou />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
