// src/components/ToggleColorMode.jsx

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ToggleColorMode = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

ToggleColorMode.propTypes = {
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
