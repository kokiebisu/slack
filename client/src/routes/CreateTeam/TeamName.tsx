import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';
import { HeaderLogo } from '../../assets/svg/Logo';

import { RouteComponentProps } from 'react-router-dom';

interface Props {}

export const TeamName: React.FC<RouteComponentProps> = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderContainer>
          <b.Container>
            <b.Flex alignItems='center' justifyContent='center'>
              <b.Box top={2} mr={4}>
                <HeaderLogo width={100} height={60} />
              </b.Box>
            </b.Flex>
          </b.Container>
        </HeaderContainer>
      </HeaderWrapper>
      <b.Box>hello</b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: 70px auto;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;
