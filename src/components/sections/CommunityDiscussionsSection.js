// src/components/sections/CommunityDiscussionSection.js
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

import discussionImage from '../../assets/images/community.jpg';

const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  backgroundColor: theme.palette.grey[200],
}));

const CommunityDiscussionSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Box py={8} px={4}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                A Thriving Community of Contributors
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                src={discussionImage}
                alt="Community Discussion"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default CommunityDiscussionSection;
