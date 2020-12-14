import * as React from "react";
import styled from "styled-components";

import * as b from "global/blocks";

import { Link } from "react-router-dom";
import { Footer } from "components/organisms/footer/footer.component";
// Svg
import { Globe } from "assets/svg";
import { NameLogo } from "assets/svg/Logo";

export const CenterLayout: React.FC<{}> = ({
  children = (
    <b.Box p={6} backgroundColor="gray" borderRadius={15}>
      <b.Flex alignItems="center" justifyContent="center">
        <b.Text>Content</b.Text>
      </b.Flex>
    </b.Box>
  ),
}) => {
  return (
    <Wrapper>
      <Container>
        <b.Box pt={4}>
          <b.Flex justifyContent="center">
            <Link to="/">
              <IconWrapper className="namelogo">
                <NameLogo />
              </IconWrapper>
            </Link>
          </b.Flex>
        </b.Box>
        <div>{children}</div>
        <div>
          <Footer variant="getstarted" />
        </div>
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
  font-family: "SlackLato-Regular";
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const ChangeRegion = styled(b.Button)`
  font-size: 16px;
  font-family: "SlackLato-Regular";
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;
