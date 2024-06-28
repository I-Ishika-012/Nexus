import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import nexusMockup from '../assets/nexus-mockup.png';
import businessWoman from '../assets/businesswoman.png';
import man from '../assets/man.jpg';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';IconButton

function CarouselItem({ item }) {
  return (
    <Paper sx={{ height: '100vh', p: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" color="primary">
            {item.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {item.subtitle}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '70%', height: '50%', borderRadius: '70%' }}
          />
        </Box>
      </Box>
    </Paper>
  );
}

  function CustomNavButton({ onClick, direction, isDisabled }) {
    return (
      <IconButton onClick={onClick}  disabled={isDisabled} sx={{ p: 2, 
        position: 'absolute', 
        top: 'calc(50% - 20px)',  
        zIndex: 10, 
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)'}, 
          '&:disabled': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
       }}>
        {direction === 'prev' ? <ArrowBackIos /> : <ArrowForwardIos />}
      </IconButton>
    );
  }
  
  function MyCarousel() {
    const items = [
      {
        title: 'Let the right people know you’re open to work',
        subtitle: 'With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.',
        image: nexusMockup,
      },
      {
        title: 'Conversations today could lead to opportunity tomorrow',
        subtitle: 'Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.',
        image: businessWoman, // Replace with your image URL
      },
      {
        title: 'Stay Up To Date On Your Industry',
        subtitle: 'From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.',
        image: man,
      }
    ];
  
    return (
      
      <Carousel
    

        NextIcon={<CustomNavButton direction="next" />}
        PrevIcon={<CustomNavButton direction="prev" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
          },
        }}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <IconButton
              onClick={onClick}
              className={className}
              sx={{ my: 50, width: 60, height: 60 }}
              style={{ ...style, display: 'block', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            >
              {next && <ArrowForwardIos />}
              {prev && <ArrowBackIos />}
            </IconButton>
          );
        }}
        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: '10px',
          },
        }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  export default MyCarousel;