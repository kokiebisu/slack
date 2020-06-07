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
            <b.Flex justifyContent='center'>
              <IconWrapper className='namelogo'>
                <NameLogo />
              </IconWrapper>
            </b.Flex>
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
                <IconWrapper mr={1}>
                  <Globe />
                </IconWrapper>
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

const IconWrapper = styled(b.Box)`
  position: relative;

  &.namelogo {
    padding: 5px;

    svg {
      width: 140px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  &.globe {
    top: 0.5px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const FooterLink = styled(b.Anchor)`
  font-size: 16px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const ChangeRegion = styled(b.Button)`
  font-size: 16px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;
