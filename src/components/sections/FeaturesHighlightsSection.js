// src/components/sections/FeaturesHighlightsSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Zoom } from '@mui/material';
import { styled } from '@mui/system';
import { AiFillDatabase, AiFillRocket, AiOutlineFileSearch } from 'react-icons/ai';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[200],
  color: theme.palette.primary.main,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const features = [
  {
    title: 'AI-Powered Vulnerability Database',
    description:
      'Sirius Scan leverages AI-generated vulnerability information from the NVD to provide accurate and up-to-date insights on potential security risks.',
    icon: <AiFillDatabase />,
  },
  {
    title: 'Modular Scanning Engine',
    description:
      'Sirius Scan integrates multiple tools and uses a RabbitMQ scanning job system for efficient and thorough assessments, ensuring better performance and accuracy.',
    icon: <AiFillRocket />,
  },
  {
    title: 'Comprehensive Reports',
    description:
      'Receive detailed reports on hosts and vulnerabilities, enabling you to prioritize remediation efforts and gain a clear picture of your network security posture.',
    icon: <AiOutlineFileSearch />,
  },
];

const FeaturesHighlightsSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box mb={4}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Key Features
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <Box component="div" sx={{ fontSize: '4rem', marginBottom: '1rem' }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturesHighlightsSection;
