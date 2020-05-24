import React from 'react';
import styled from 'styled-components';

import { Box } from '../../../styles/blocks';

// Pages
import { ThreadsPage } from './ThreadsPage';

export const Content = ({ selected }) => {
  const renderContent = (selected) => {
    switch (selected) {
      case 'threads':
        return <ThreadsPage />;
    }
  };
  return <Wrapper>{renderContent(selected)}</Wrapper>;
};

const Wrapper = styled(Box)`
  height: inherit;
`;
