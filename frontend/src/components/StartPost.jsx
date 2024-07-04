import React from 'react';
import { Box, Card, Avatar, TextField, Button, Grid } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const StartPost = () => {
  return (
    <Card sx={{ padding: 2, marginTop: 10, borderRadius: '20px', width: { xs: '100%', md: 'auto' },
    maxWidth: { xs: '90%', sm: '70%', md: 800 }, height: 'auto', display: 'flex', flexDirection: 'column', margin: { xs: '20px auto', md: '100px auto' }, top: { xs: 'auto', md: 0 } }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar alt="User Avatar" src="https://via.placeholder.com/150" />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start a post, try writing with AI"
            InputProps={{
              style: { borderRadius: '50px' },
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button startIcon={<PhotoIcon />} sx={{ textTransform: 'none' }}>
          Media
        </Button>
        <Button startIcon={<EventIcon />} sx={{ textTransform: 'none' }}>
          Event
        </Button>
        <Button startIcon={<ArticleIcon />} sx={{ textTransform: 'none' }}>
          Write article
        </Button>
      </Box>
    </Card>
  );
};

export default StartPost;
