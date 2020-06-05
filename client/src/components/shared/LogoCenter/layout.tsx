import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { Link } from 'react-router-dom';

// Svg
import { Globe } from '../../../assets/svg';
import { NameLogo } from '../../../assets/svg/Logo';

interface Props {}

export const LogoCenterLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Link to='/'>
          <b.Box pt={4}>
            <LogoWrapper justifyContent='center'>
              <NameLogo width={140} height={60} />
            </LogoWrapper>
          </b.Box>
        </Link>
        <ChildWrapper>{children}</ChildWrapper>
        <b.Box py={4}>
          <b.Flex alignItems='center' justifyContent='center'>
            <b.Box mr={2}>
              <FooterLink href='/legal'>Privacy & terms</FooterLink>
            </b.Box>
            <b.Box mr={2}>
              <FooterLink href='/help'>Contact us</FooterLink>
            </b.Box>
            <b.Box mr={2}>
              <b.Flex>
                <GlobeWrapper mr={1}>
                  <Globe width={12} height={12} color='gray' />
                </GlobeWrapper>
                <b.Box>
                  <ChangeRegion>Change region</ChangeRegion>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </b.Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 100vh;
`;

const Container = styled(b.Container)`
  display: grid;
  grid-template-rows: 100px auto 100px;
`;

const ChildWrapper = styled(b.Box)`
  flex-grow: 1;
`;

const LogoWrapper = styled(b.Flex)`
  padding: 5px;
`;

const GlobeWrapper = styled(b.Box)`
  position: relative;
  top: 0.5px;
`;

const FooterLink = styled(b.Anchor)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const ChangeRegion = styled(b.Button)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;
