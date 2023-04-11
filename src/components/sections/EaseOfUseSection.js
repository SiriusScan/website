// src/components/sections/EaseOfUseSection.js
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import EaseOfUseIcon from '@mui/icons-material/TouchApp';
import DocumentationIcon from '@mui/icons-material/MenuBook';
import CommunityIcon from '@mui/icons-material/People';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(8, 4),
  color: theme.palette.getContrastText(theme.palette.primary.light),
}));

const EaseOfUseSection = () => {
  const topicAreas = [
    {
      title: 'Ease of Use',
      description: 'Sirius Scan features a user-friendly interface and easy setup, allowing you to start scanning your network for vulnerabilities quickly and efficiently.',
      icon: <EaseOfUseIcon style={{ fontSize: 70 }} />,
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation helps you get started with Sirius Scan and guides you through its various features and capabilities.',
      icon: <DocumentationIcon style={{ fontSize: 70 }} />,
    },
    {
      title: 'Community',
      description: 'As an open-source project, Sirius Scan is backed by an active community of security professionals and developers who continuously work on enhancing the tool.',
      icon: <CommunityIcon style={{ fontSize: 70 }} />,
    },
  ];

  return (
    <Container maxWidth="xl">
        <SectionWrapper>
        <Typography variant="h4" component="h2" textAlign="center" mb={4}>
            Effortless Setup and Powerful Usability
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            {topicAreas.map((topic, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
                <Box textAlign="center">
                {topic.icon}
                <Typography variant="h6" component="h3" mt={2}>
                    {topic.title}
                </Typography>
                <Typography variant="body1" mt={1}>
                    {topic.description}
                </Typography>
                </Box>
            </Grid>
            ))}
        </Grid>
        </SectionWrapper>
    </Container>
  );
};

export default EaseOfUseSection;
