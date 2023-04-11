import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {
  Code as CodeIcon,
  AttachMoney as AttachMoneyIcon,
  Group as GroupIcon,
  Security as SecurityIcon,
  CompareArrows as CompareArrowsIcon,
} from '@mui/icons-material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const BenefitItemWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    height: '100%', // Add this line
  }));
  

const BenefitItem = ({ title, children, icon }) => (
  <Grid item xs={12} sm={6} md={4}>
    <BenefitItemWrapper>
      <Box display="flex" justifyContent="center" mb={2}>
        {icon}
      </Box>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {children}
      </Typography>
    </BenefitItemWrapper>
  </Grid>
);

const BenefitsSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Unlock the Potential of Sirius Scan
          </Typography>
          <Typography variant="h6" component="h3">
            Experience the benefits of an open-source, operator-focused vulnerability scanner
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <BenefitItem
            title="Flexibility and Customization"
            icon={<CodeIcon fontSize="large" />}
          >
            Adapt Sirius Scan to your unique needs with its open-source nature, allowing for seamless integration with your existing security infrastructure.
          </BenefitItem>
          <BenefitItem
            title="Lower Cost of Ownership"
            icon={<AttachMoneyIcon fontSize="large" />}
          >
            Sirius Scan's affordability enables you to allocate resources to other critical security initiatives, ensuring comprehensive protection for your organization.
          </BenefitItem>
          <BenefitItem
            title="Active Community and Collaboration"
            icon={<GroupIcon fontSize="large" />}
          >
            Benefit from continuous updates, improvements, and innovation driven by a worldwide community of developers and security professionals.
          </BenefitItem>
          <BenefitItem
            title="Operator Capability and Empowerment"
            icon={<SecurityIcon fontSize="large" />}
          >
            Gain deeper insights into your security posture and respond more effectively to potential threats with Sirius Scan's focus on operator capability and control.
          </BenefitItem>
          <BenefitItem
            title="Vendor Independence"
            icon={<CompareArrowsIcon fontSize="large" />}
          >
            Maintain control over your security infrastructure with Sirius Scan, avoiding vendor lock-in and ensuring adaptability to evolving threats.
          </BenefitItem>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default BenefitsSection;
