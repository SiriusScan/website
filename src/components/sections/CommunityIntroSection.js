// src/components/sections/CommunityIntroSection.js
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

import communityImage from '../../assets/images/appTall.png';

const SectionWrapper = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }));

const CommunityIntroSection = () => {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
        <Box py={8} px={4}>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Join the Sirius Scan Community
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Sirius Scan is driven by a vibrant community of security enthusiasts, developers, and users. By joining our community, you'll have the opportunity to collaborate with like-minded individuals, share your expertise, and contribute to the growth and innovation of Sirius Scan. Together, we're pushing the boundaries of what's possible in vulnerability scanning.
                </Typography>
                <Box mt={2}>
                <Button
                    sx={{
                    minWidth: '300px',
                    fontSize: '1.35rem',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderWidth: 2,
                    padding: '10px 10px',
                    }}
                    variant="outlined"
                >
                    Get Involved
                </Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={communityImage} />
            </Grid>
            </Grid>
        </Box>
        </Container>
    </SectionWrapper>
  );
};

export default CommunityIntroSection;
