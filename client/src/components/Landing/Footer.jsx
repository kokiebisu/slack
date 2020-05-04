import React from 'react';
import styled from 'styled-components';

import { landing } from '../../styles/sizes';

export const Footer = () => {
  return <Wrapper>hello</Wrapper>;
};

const Wrapper = styled.div`
  @media ${landing.xl} {
    height: calc(100vh - 70px);
  }

  background-color: red;
`;
