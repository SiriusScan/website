import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './theme/muiTheme';

import Header from './components/Header';
import IntroSection from './components/sections/IntroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import EaseOfUseSection from './components/sections/EaseOfUseSection';
import FooterSection from './components/sections/FooterSection';
import GetStartedBlock from './components/sections/GetStartedBlock';
import Spacer from './components/Spacer';

//Outlets
import Documentation from './components/Documentation';
import Features from './components/Features';
import Community from './components/Community';


function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
      
      <Box pt={0}>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <IntroSection />
              <FeaturesSection />
              <EaseOfUseSection />
              <Box position="relative">
                <Spacer height="50px" />
                <Box position="relative">
                  <GetStartedBlock />
                  <FooterSection />
                </Box>
              </Box>
            </>
          } />
          <Route path="/docs/" element={<Documentation />} />
          <Route path="/community/" element={<><Header /><Community /></>} />
          <Route path="/features/" element={<><Header /><Features /></>} />
          {/* Add other routes here for different pages */}
        </Routes>
      </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
