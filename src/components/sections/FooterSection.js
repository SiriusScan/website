// src/components/sections/FooterSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatBubble from '@mui/icons-material/ChatBubble';
import PhoneIcon from '@mui/icons-material/Phone';

import logo from '../../assets/images/logo.png';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(6, 4),
  color: theme.palette.getContrastText(theme.palette.primary.dark),
}));

const Tagline = styled(Typography)(({ theme }) => ({
  fontSize: '1.9rem',
}));

const FooterSection = () => {
  const footerLinks = [
    { title: 'Home', href: '/' },
    { title: 'Download', href: 'https://github.com/SiriusScan/Sirius' },
    { title: 'Documentation', href: '/docs' },
    { title: 'Community', href: '/Community' },
    { title: 'Support', href: 'https://discord.gg/VTjqSxkJqX' },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column"  justifyContent="center" height="100%">
                <img src={logo} alt="Sirius Logo" width="350" />
                <Tagline>Empowering Cybersecurity, One Scan at a Time.</Tagline>
            </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            {footerLinks.map((link, index) => (
                <Box key={index} mt={1}>
                <Link href={link.href} color="inherit" underline="hover">
                    {link.title}
                </Link>
                </Box>
            ))}
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <Box mt={1}>
                <Typography>
                  <Link
                      href="https://discord.gg/VTjqSxkJqX"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      underline="hover"
                  >
                    <ChatBubble /> Community Discord Server
                  </Link>
                </Typography>
            </Box>
            <Box mt={2}>
                <Typography variant="h6">GitHub Repository</Typography>
                <Box mt={1}>
                <Link
                    href="https://github.com/SiriusScan/Sirius"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                >
                    <GitHubIcon /> https://github.com/SiriusScan/Sirius
                </Link>
                </Box>
            </Box>
            <hr />
            <Link
                    href="https://opensecurity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                >
              <Typography variant="subtitle1">Sponsored by Open Security</Typography>
            </Link>
            </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default FooterSection;