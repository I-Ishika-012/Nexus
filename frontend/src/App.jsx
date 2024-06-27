import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeToggleProvider } from './styles/ThemeContext';



function App() {

  return (
    
    <ThemeToggleProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </ThemeToggleProvider>
   

  )
}

export default App
