import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Navbar from './components/organism/Navbar'

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </React.Fragment>
    )
}

export default App