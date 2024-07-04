import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Divider, Button } from '@mui/material';
import { useState } from 'react';

const WelcomeCard = () => {
    const handleAddPhotoClick = () => {
        // Add logic to update the photo here
        console.log('Updating photo...');
      };

      const [showMore, setShowMore] = useState(false);

     const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    
  return (
    <Box sx={{
        width: { xs: '100%', md: 'auto' },
        maxWidth: { xs: '90%', sm: '70%', md: 600 },
        margin: { xs: '20px auto', md: '100px auto' },
        padding: '20px',
        textAlign: 'center',
        position: { xs: 'relative', md: 'absolute' },
        top: { xs: 'auto', md: 0 }, // auto for small screens, top 0 for medium and larger
        left: { xs: 'auto', md: 0 },
        mx: { xs: 'auto', md: 20 },
      }}>
    <Card sx={{
          height: 'auto',
          padding: 0,
          borderRadius: '30px',
          width: '100%',
          marginBlockStart: { xs: 5, md: 0 },
        }}>
        <Box
        sx={{
          height: '100px',
          width: '100%',
          backgroundImage: 'url("https://via.placeholder.com/350x100")', // Replace with your banner image source
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: 0,
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',mt: '-80px', padding: 3 }}>
        <Avatar
          alt="User Avatar"
          src="https://via.placeholder.com/150" // Replace with your image source
          sx={{ width: 80, height: 80, marginBottom: 2 ,}}
        />
        <Typography variant="h6" sx={{padding: 1, fontSize: '1.2rem'}}  gutterBottom>
          Welcome, User!
        </Typography>
        <Button color="primary" onClick={handleAddPhotoClick} sx={{ fontSize: '0.5rem', textAlign: 'center'  }}>
          Add a photo
        </Button>
        {!showMore && (
          <Button color="primary" onClick={toggleShowMore}>
            Show more
          </Button>
        )} 
      </Box>
      {showMore && (
        <>
       
      <Divider sx={{ my: 2 }} />
      <CardContent>
        <Typography variant="caption" color="textSecondary" component="p">
          Profile Viewers
        </Typography>
        <Typography variant="caption">60</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="caption" color="textSecondary" component="p">
          Post Impressions
        </Typography>
        <Typography variant="caption">818</Typography>
      </CardContent>
      </>
      )}
    </Card>
    </Box>
  );
};

export default WelcomeCard;
