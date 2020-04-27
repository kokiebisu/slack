import React from 'react';

// Home
import { Box } from '../components/Blocks';
import { Channel } from '../components/Home/Channel';
import { NavSection } from '../components/Home/NavSection';

export default {
  title: 'Home Screen',
};

export const DefaultChannel = () => {
  return (
    <Box width={260} bg='#3F0E40'>
      <Channel title='bcit' />
    </Box>
  );
};

export const DefaultNavSection = () => {
  return (
    <Box width={260} bg='#3F0E40'>
      <NavSection />
    </Box>
  );
};
