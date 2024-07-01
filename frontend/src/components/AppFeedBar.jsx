import * as React from 'react';
import PropTypes from 'prop-types';
import { SearchRounded, Home, People, Work, Chat, Notifications, AccountCircle, PeopleAltRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from '../styles/ToggleColorMode';
import { Margin } from '@mui/icons-material';
import { useThemeToggle } from '../styles/ThemeContext';

const logoStyle = {
  width: '50px',
  height: 'auto',
  cursor: 'pointer', 
  marginLeft: '10px',
  marginRight: '10px',
};

function AppFeedBar() {
  const [open, setOpen] = React.useState(false);

  const { toggleColorMode } = useThemeToggle();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  './src/assets/nexus.png'
                }
                style={logoStyle}
                alt="logo of Nexus"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex', } }}>
              <MenuItem sx={{ py: '6px', px: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'inherit' }  }}>
    <TextField
      variant="outlined"
      borderColor="transparent"
      placeholder="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            <SearchRounded sx={{color: '#06ccfd'}} />
          </InputAdornment>
        ),
        sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
      }}
      sx={{ width: '300px' ,  // Adjust width as needed
        '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
      '&:hover': { backgroundColor: 'inherit' } 
    }}
    />
  </MenuItem>

                <MenuItem
                  onClick={() => scrollToSection('network')}
                  sx={{ py: '6px', px: '12px', '&:hover': { backgroundColor: 'inherit' }  }}
                >
                <IconButton sx={{color: '#06ccfd', '&:hover': { backgroundColor: 'inherit' }}}>
                  <People />
                </IconButton>
                <Typography variant="caption" color="text.primary">Network</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('jobs')}
                  sx={{ py: '6px', px: '12px', '&:hover': { backgroundColor: 'inherit' }  }}
                >
                <IconButton sx={{color: '#06ccfd', '&:hover': { backgroundColor: 'inherit' }}}>
                    <Work />
                </IconButton>
                <Typography variant="caption" color="text.primary">Jobs</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('messaging')}
                  sx={{ py: '6px', px: '12px', '&:hover': { backgroundColor: 'inherit' }  }}
                >
                  <IconButton sx={{color: '#06ccfd', '&:hover': { backgroundColor: 'inherit' }}}>
                    <Chat />
                  </IconButton>
                  <Typography variant="caption" color="text.primary">Messaging</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('notifications')}
                  sx={{ py: '6px', px: '12px', '&:hover': { backgroundColor: 'inherit' }  }}
                >
                  <IconButton sx={{color: '#06ccfd', '&:hover': { backgroundColor: 'inherit' }}}>
                    <Notifications />
                  </IconButton>
                  <Typography variant="caption" color="text.primary">Notifications</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('me')}
                  sx={{ py: '6px', px: '12px' , '&:hover': { backgroundColor: 'inherit' }  }}
                >
                  <IconButton sx={{color: '#06ccfd', '&:hover': { backgroundColor: 'inherit' }}}>
                <AccountCircle />
                </IconButton>
                 <Typography variant="caption" color="text.primary">Me</Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('homefeed')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('network')}>
                    My Network
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('jobs')}>
                    Jobs
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('messaging')}>
                    Messaging
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('notifications')}>
                    Notifications
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('me')}>
                    Me
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppFeedBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']),
  toggleColorMode: PropTypes.func,
};

export default AppFeedBar;