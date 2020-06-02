import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { HeaderLogo } from '../../../assets/svg/Logo';

interface Props {}

export const LogoCenterHeader: React.FC<Props> = () => {
  return (
    <b.Box>
      <LogoWrapper justifyContent='center'>
        <HeaderLogo width={140} height={60} />
      </LogoWrapper>
    </b.Box>
  );
};

const LogoWrapper = styled(b.Flex)`
  padding: 5px;
`;
