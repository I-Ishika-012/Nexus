import React from 'react';
import { Grid, Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import learn from '../assets/learn.png';
import connect from '../assets/connect.png';

const features = [
  {
    image: connect, // replace with your local image path or URL
    title: 'Connect with people who can help',
    buttonText: 'Find people you know',
  },
  {
    image: learn, // replace with your local image path or URL
    title: 'Learn the skills you need to succeed',
    buttonText: 'Choose a topic to learn about',
  },
];


const FeatureSection = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1, padding: 3, height: '100vh' , display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginBlockEnd: 10}}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index} container direction="column" alignItems="center">
            <img src={feature.image} alt={feature.title} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
            <Typography variant="h5" align="center" sx={{ marginTop: 2, fontWeight: 'bold', fontFamily: 'Nunito', color: '#576cbc' }}>
              {feature.title}
            </Typography>
            <Button variant="outlined" sx={{ marginTop: 2, borderRadius: 10, color: 'secondary.main', borderColor: 'secondary.main', '&:hover': { borderColor: 'primary.main', color: 'primary.main', }, }}>
              {feature.buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;
