import React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks.js';

import { HeaderLogo } from '../../../assets/svg/Logo';

export const LogoCenterHeader = () => {
  return (
    <GetStartedHeader>
      <LogoWrapper justifyContent='center'>
        <HeaderLogo width={140} height={60} />
      </LogoWrapper>
    </GetStartedHeader>
  );
};

const GetStartedHeader = styled(b.Box)``;

const LogoWrapper = styled(b.Flex)`
  padding: 5px;
`;
