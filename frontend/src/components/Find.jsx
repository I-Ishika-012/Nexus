import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import businessTeam from '../assets/business-team.jpg';
import { ArrowForward } from '@mui/icons-material';

const FindSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 5, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginBlockEnd: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" fontFamily={'Nunito'} fontWeight={600} gutterBottom>
            Who is Nexus for?
          </Typography>
          <Typography variant="h5" color="textPrimary" fontFamily={'Nunito'} gutterBottom>
            Anyone looking to navigate their professional life.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mb: 1 , borderRadius: 10}} fontFamily={'Nunito'} endIcon={<ArrowForward />} fullWidth>
              Find a coworker or classmate
            </Button>
            <Button variant="contained" color="primary" sx={{ mb: 1, borderRadius: 10 }} fontFamily={'Nunito'} endIcon={<ArrowForward />} fullWidth>
              Find a new job
            </Button>
            <Button variant="contained" color="primary" sx={{ mb: 1, borderRadius: 10 }} fontFamily={'Nunito'} endIcon={<ArrowForward />} fullWidth>
              Find a course or training
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', width: '80%', paddingTop: '80%', overflow: 'hidden', borderRadius: '50%' }}>
            <img
              src={businessTeam} // Replace with your local image path or URL
              alt="Professional people"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindSection;
