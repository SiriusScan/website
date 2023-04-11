// src/components/sections/FooterSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
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
    { title: 'Home', href: '#' },
    { title: 'Download', href: '#' },
    { title: 'Documentation', href: '#' },
    { title: 'Community', href: '#' },
    { title: 'Support', href: '#' },
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
                <MailIcon /> Email: info@siriusscan.com
                </Typography>
                <Typography>
                <PhoneIcon /> Phone: +1 (123) 456-7890
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
            </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

{/*<a href="https://www.freepik.com/free-vector/network-connections-background-with-connecting-lines-dots_8033697.htm#query=connected%20dots&position=0&from_view=keyword&track=ais">Image by kjpargeter</a> on Freepik*/}

export default FooterSection;