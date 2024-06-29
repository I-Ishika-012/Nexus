import React from 'react';
import Typography from '@mui/material/Typography';
import { useState} from 'react';
import AppAppBar from '../components/AppAppBar';
import { ThemeToggleProvider } from '../styles/ThemeContext';
import SignInSide from '../components/SignInSide';
import { Box, Stack, Container } from '@mui/material';
import Details from '../components/Details';
import MyCarousel from '../components/Caraousel';
import learn from '../assets/learn.png';
import connect from '../assets/connect.png';
import FeatureSection from '../components/Feature';
import FindSection from '../components/Find';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

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
        <div>
            <Details />
        </div>
        <div>
            <MyCarousel />
        </div>
        <div>
          <FeatureSection />
        </div>
        <div>
          <FindSection />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Footer />
        </div>
      </section>
   

      </ThemeToggleProvider>
      
    );
  };

export default Home;
