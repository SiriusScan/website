import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

import introImage from '../../assets/images/app.png';
import netbg from '../../assets/images/netbg.png';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage: `url(${netbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.getContrastText(theme.palette.primary.main),
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  '&:hover': {
    fontWeight: 'bold',
  },
}));

const IntroSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Box py={8} px={4} color="secondary.main">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Welcome to Sirius Scan
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ lineHeight: 1.6, marginBottom: '1.5rem' }}
              >
                Sirius Scan is an open-source, general-purpose vulnerability scanning tool that helps you identify and manage security risks in your network infrastructure.
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 'medium', letterSpacing: 1 }}
              >
                Discover, Assess, and Remediate
              </Typography>
              <Box mt={2}>
                <NavLink to="/features">
                  <Button
                      component={Link}
                      to="/features"
                      sx={{
                        minWidth: '300px',
                        fontSize: '1.35rem',
                        borderColor: 'secondary.main',
                        color: 'secondary.main',
                        borderWidth: 2,
                        padding: '10px 10px',
                        backgroundColor: 'transparent',
                        transition: 'background-color ease-in-out', // Add or adjust the transition duration
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      variant="outlined"
                    >
                    Learn More
                  </Button>
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={introImage} alt="Sirius Scan" style={{ maxWidth: '100%', borderRadius: '8px', minWidth: '100%' }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default IntroSection;
