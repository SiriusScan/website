import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import feature1Image from '../../assets/images/database.gif';
import feature2Image from '../../assets/images/scanner.png';
import feature3Image from '../../assets/images/report.png';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Public Vulnerability Database',
      subtitle: 'Stay Updated with the Latest Vulnerabilities',
      description:
        'Sirius Scan uses a public vulnerability database based on NVD and leverages AI generation to provide the most accurate and up-to-date information. With our extensive database, you can ensure that your organization is prepared to handle emerging threats and stay ahead of potential security breaches.',
      image: feature1Image,
    },
    {
      title: 'Modular Scanning Engine',
      subtitle: 'Efficient and Thorough Scanning',
      description:
        'Our modular scanning engine integrates multiple tools and uses a RabbitMQ scanning job system to ensure efficient and thorough assessments. This innovative approach to vulnerability scanning allows for better performance and accuracy, giving you the confidence that your network is secure and resilient.',
      image: feature2Image,
    },
    {
      title: 'Enhanced Reports',
      subtitle: 'Comprehensive Insights for Actionable Decisions',
      description:
        'Receive comprehensive reports on hosts and vulnerabilities, giving you the insights you need to take action and secure your network. Our detailed reporting system provides a clear picture of your network\'s security posture, allowing you to prioritize vulnerabilities and remediation efforts effectively.',
      image: feature3Image,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box py={8} px={4}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4}>
          A Better Vulnerability Scanner. One Dedicated To You, The Operator.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} item xs={12}>
              <Grid container alignItems="center" flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}>
                <Grid item xs={12} md={6}>
                  <Box textAlign="center" py={2} px={4}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box py={2} px={4}>
                    <Typography variant="h6" component="h3" gutterBottom color="primary" fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom color="textSecondary" fontWeight="medium" fontSize="1.5rem">
                      {feature.subtitle}
                    </Typography>
                    <Typography variant="body1">{feature.description}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesSection;
