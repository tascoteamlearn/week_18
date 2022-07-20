import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Pages
import Login from './Login'
import Home from './Home'
import About from './About'
import Navbar from '../Components/Navbar'

export default function Navigator() {

    // useEffect(()=>{
    //     console.log("see hello")
    // },[])
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/about' exact element={<About />} />
                </Routes>
            </Router>
        </div>
    )
}
