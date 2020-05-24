import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../../styles/blocks';
import { Option } from './Option';

export const Options = () => {
  return (
    <OptionsWrapper>
      <Box>
        <Option name='threads' link='threads' />
        <Option name='mentions & reactions' link='activity-page' />
        <Option name='drafts' link='drafts' />
        <Option name='saved items' link='saved-page' />
        <Option name='people' link='browse-channels' />
        <Option name='apps' link='browse-people' />
        <Option name='files' link='apps' />
        <Option name='show less' link='browse-files' />
      </Box>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;
