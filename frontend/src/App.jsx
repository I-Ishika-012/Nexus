import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Network from './pages/Network'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeToggleProvider } from './styles/ThemeContext'



function App() {

  return (
    
    <ThemeToggleProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </Router>
    </ThemeToggleProvider>
   

  )
}

export default App
