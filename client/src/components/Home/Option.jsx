import React from 'react';

import { Box } from '../../styles/blocks';

export const Option = ({ name, children }) => {
  return (
    <Box>
      <Box>{name}</Box>
      <Box>{children}</Box>
    </Box>
  );
};
