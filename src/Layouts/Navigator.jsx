import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Pages
import Login from './Login'
import Home from './Home'

export default function Navigator() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}
