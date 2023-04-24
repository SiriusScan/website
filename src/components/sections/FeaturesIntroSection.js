// src/components/sections/FeaturesIntroSection.js
import React from 'react';
import { Box, Container, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/system';

import tutorial from '../../assets/images/tutorial.gif';
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

const FeaturesIntroSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Box py={8} px={4} color="secondary.main" display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              width: '100%',
              maxWidth: '1000px',
              height: '100%',
              minHeight: '500px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '1.0rem',
            }}
          >              
            <img
              src={tutorial}
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Box>
          <Box mt={2}>
            
              <Button
                sx={{
                  minWidth: '300px',
                  fontSize: '1.35rem',
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  borderWidth: 2,
                  padding: '10px 10px',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                variant="outlined"
              >
                <Link href="https://github.com/SiriusScan/Sirius" color="inherit" underline="hover">
                  Get Started
                </Link>
              </Button>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturesIntroSection;
