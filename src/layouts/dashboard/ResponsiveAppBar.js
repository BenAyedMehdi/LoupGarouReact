import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ResponsiveAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar  sx={{ justifyContent: 'space-between' }} >
          <Button href='/' color="inherit">Home</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}