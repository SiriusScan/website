// src/components/sections/GetStartedBlock.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const GetStartedWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '375px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2, 4),
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: theme.shadows[4],
  width: '80%',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
}));

const ButtonContainer = styled(Box)({
  marginLeft: 'auto',
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '1.35rem',
  padding: '15px 35px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark, // Change the background color on hover
    border: `1px solid ${theme.palette.primary.main}`, // Add a border on hover
    // Add a slight transparency change on hover
    opacity: 0.8,
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  '&:hover': {
    fontWeight: 'bold',
  },
}));


const GetStartedBlock = () => {
  return (
      <GetStartedWrapper>
        <Typography variant="h6" component="h3" mb={0}>
          Unlock the potential of Sirius Scan today! {/* Update the text */}
        </Typography>
        <ButtonContainer>
          <NavLink to="https://github.com/SiriusScan/Sirius">
            <StyledButton variant="contained" color="secondary">
              Download Sirius Scan
            </StyledButton>
          </NavLink>
        </ButtonContainer>
      </GetStartedWrapper>
  );
};

export default GetStartedBlock;