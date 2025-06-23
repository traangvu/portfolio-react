// src/App.jsx
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MoreWork from './pages/MoreWork'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more-work" element={<MoreWork />} />
        </Routes>
    )
}

export default App
