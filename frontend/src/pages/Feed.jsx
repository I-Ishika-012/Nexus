import React from 'react'
import { ThemeToggleProvider } from '../styles/ThemeContext';
import AppFeedBar from '../components/AppFeedBar';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export default function Feed() {
    const [mode, setMode] = useState('light');
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      };
      
  return (
    <ThemeToggleProvider>
        <section>
            <div>
                <AppFeedBar toggleColorMode={toggleColorMode} /> 
            </div>
        </section>
    </ThemeToggleProvider>
    
  )
}
