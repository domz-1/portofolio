import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Link } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../rtk/themeSlice';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DownloadIcon from '@mui/icons-material/Download';
import cvUrl from '../assets/Cv.pdf'

interface IState{
  theme: {
    darkMode: boolean;
  };
}

export default function NavBar() {
  const darkMode = useSelector((state: 
    IState
  ) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleModeToggle = () => {
    dispatch(toggleTheme());
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
<List>
  {[
    { text: 'About', icon: <InfoIcon /> },
    { text: 'Skills', icon: <WorkIcon /> },
    { text: 'Work', icon: <DownloadIcon /> },
    { text: 'Contact', icon: <ContactMailIcon /> },
  ].map((item) => (
    <ListItem
      key={item.text}
      component="a"
      href={`#${item.text.toLowerCase()}`} // Use component='a' for the anchor behavior
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  ))}
</List>

      <Divider />
      <List>
        <ListItem>
        <Button
  variant="contained"
  color="primary"
  startIcon={<DownloadIcon />}
  fullWidth
  onClick={() => window.open('../assets/Cv.pdf', '_blank')}
>
  Download CV
</Button>
        </ListItem>
        <ListItem>
          <Button
            variant='outlined'
            onClick={handleModeToggle}
            startIcon={!darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            fullWidth
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='nav'>
      <AppBar className='app-nav' sx={{ height: "50px", p: "10px" }}>
          <Link href="#" variant='h2'>
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          Adham
        </Typography>
          </Link>
        <Box className='menu'>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </IconButton>
        </Box>
        <Toolbar className='nav-toolbar'>
          <Box className='nav-links'>
            <Link href='#about' variant='h5'>
            <Typography variant='h5'>
              About
            </Typography>
            </Link>
            <Link href='#skills' variant='h5'>
            <Typography variant='h5'>
              Skills
            </Typography>
            </Link>
            <Link href='#work' variant='h5'>
            <Typography variant='h5'>
              Work
            </Typography>
            </Link>
            <Link href='#contact'>
              <Typography variant='h5'>
              Contact
              </Typography>
            </Link>
          </Box>
          <Box className='nav-actions'>
            <IconButton onClick={handleModeToggle}>
              {!darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Link href={cvUrl} download>  <Button variant="contained" color="primary" startIcon={<DownloadIcon />} fullWidth>
    Download CV
  </Button>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}