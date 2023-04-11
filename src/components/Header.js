// src/components/Header.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, AppBar, Toolbar, Container, Typography, Link, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/system';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';

const StyledAppBar = styled(AppBar)(({ theme, scroll }) => ({
  backgroundColor: scroll ? 'transparent' : theme.palette.primary.main,
  color: scroll ? theme.palette.common.black : theme.palette.getContrastText(theme.palette.primary.main),
  transition: 'background-color 0.3s, color 0.3s',
  backdropFilter: scroll ? 'blur(5px)' : 'none',
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  '&:hover': {
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <React.Fragment>
      <StyledAppBar position="fixed" elevation={0} scroll={trigger}>
        <Toolbar>
          <Box maxWidth="xl" margin="0 auto" display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <NavLink component={RouterLink} to="/">
              <Typography variant="h6">
                <img src={trigger ? logo2 : logo} alt="Sirius Scan" style={{ height: '60px', paddingTop: '10px' }} />
              </Typography>
            </NavLink>
            <Box>
              <NavLink component={RouterLink} to="/features">
                Features
              </NavLink>
              <NavLink component={RouterLink} to="/docs">
                Documentation
              </NavLink>
              <NavLink component={RouterLink} to="/community">
                Community
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
};

export default Header;
