import React from 'react';
import { Box, Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';

const DiscoverSection = () => {
  return (
    <Card sx={{
        width: { xs: '100%', md: 'auto' },
        maxWidth: { xs: '90%', sm: '70%', md: 600 },
        margin: { xs: '20px auto', md: '800px auto' },
        padding: 0,
        textAlign: 'center',
        position: { xs: 'relative', md: 'absolute' }, // auto for small screens, top 0 for medium and larger
        left: { xs: 'auto', md: 0 },
        mx: { xs: 'auto', md: 20 },
        borderRadius: '30px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        marginBlockStart: { xs: 5, md: 10 },
      }}>
      <Typography variant="h6"sx={{fontSize: '1.2rem',}} gutterBottom>
        Discover More
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalActivityIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Followed Hashtags" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Find Alumni" />
        </ListItem>
      </List>
    </Card>
  );
};

export default DiscoverSection;
