import React from 'react'
import { ThemeToggleProvider } from '../styles/ThemeContext';
import AppFeedBar from '../components/AppFeedBar';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import WelcomeCard from '../components/WelcomeCard';
import StartPost from '../components/StartPost';
import DiscoverSection from '../components/Discover';
import PostSection from '../components/PostSection';
import NewsSection from '../components/NewsSection';

export default function Feed() {
    const [mode, setMode] = useState('light');
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      };
      
  return (
    <ThemeToggleProvider>
        <section>
            <div>
                <AppFeedBar toggleColorMode={toggleColorMode} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlockEnd: 20 }} /> 
            </div>
            <div>
                <WelcomeCard />
            </div>
            <div>
                <StartPost />
            </div>
            <div>
                <DiscoverSection />
            </div>
            <div>
                <PostSection />
            </div>
            <div>
                <NewsSection />
            </div>
        </section>
    </ThemeToggleProvider>
    
  )
}
