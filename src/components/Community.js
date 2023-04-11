import React from 'react';
import { Box } from '@mui/material';

import CommunityIntroSection from './sections/CommunityIntroSection';
import CommunityDiscussionSection from './sections/CommunityDiscussionsSection';
import FooterSection from './sections/FooterSection';
import Spacer from './Spacer';

const Community = () => {
  return (
    <Box>
      <CommunityIntroSection />
      <CommunityDiscussionSection />
      {/* Add other sections as they are created */}
      <Spacer height="50px" />
      <FooterSection />
    </Box>
  );
};

export default Community;
