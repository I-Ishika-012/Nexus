import React from 'react';
import Typography from '@mui/material/Typography';
import { useState} from 'react';
import AppAppBar from '../components/AppAppBar';
import { ThemeToggleProvider } from '../styles/ThemeContext';
import SignInSide from '../components/SignInSide';


const Home = () => {
    const [mode, setMode] = useState('light');
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      };
    
    return (
        <ThemeToggleProvider>
      <section>
        <div>
            <AppAppBar toggleColorMode={toggleColorMode} />
        </div>
        <div>
            <SignInSide />
        </div>
      </section>
      </ThemeToggleProvider>
      
    );
  };

export default Home;
