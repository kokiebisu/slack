import React, { useEffect } from "react";

import styled from "styled-components";

import { size } from "../../../global/sizes";
import * as b from "../../../global/blocks";
import { Close } from "../../../assets/svg";
import { NameLogo } from "../../../assets/svg/Logo";
import { ChevronRight } from "../../../assets/svg";
import { useToggleDispatch } from "../../../context/toggle-context";
import { TransparentButtonMotion } from "../../../animations/Buttons";

export const LandingModal: React.FC<{ data?: any; loading?: boolean }> = ({
  data,
  loading,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    return () => {
      document.body.style.overflow = "initial";
      document.body.style.height = "initial";
    };
  }, []);
  const dispatchToggle = useToggleDispatch();

  const options = [
    { name: "Why Slack?", sub: [] },
    { name: "Solutions", sub: [] },
    { name: "Resources", sub: [] },
    { name: "Enterprise" },
    { name: "Pricing" },
  ];

  return (
    <Wrapper>
      <b.Box className="header">
        <b.Flex justifyContent="space-between" alignItems="center">
          <IconWrapper className="logo">
            <NameLogo />
          </IconWrapper>
          <IconButtonWrapper className="close">
            <Close />
          </IconButtonWrapper>
        </b.Flex>
      </b.Box>
      <b.Box className="content">
        {options.map((option) => {
          return (
            <Option>
              <b.Flex justifyContent="space-between" alignItems="center">
                <b.Box>
                  <b.Text>{option.name}</b.Text>
                </b.Box>
                {option.sub && (
                  <b.Box>
                    <IconWrapper className="arrow">
                      <ChevronRight />
                    </IconWrapper>
                  </b.Box>
                )}
              </b.Flex>
            </Option>
          );
        })}
      </b.Box>
      <Buttons>
        <b.Box>
          {!loading &&
          data &&
          data.myTeams.teams! &&
          data.myTeams.teams!.length > 0 ? (
            <Button
              initial="rest"
              animate="rest"
              whileHover="hovered"
              className="button__filled"
            >
              <b.Button>Sign In</b.Button>
            </Button>
          ) : (
            <Button
              initial="rest"
              animate="rest"
              whileHover="hovered"
              className="button__filled"
            >
              <b.Button>Launch</b.Button>
            </Button>
          )}
          <Button
            initial="rest"
            animate="rest"
            whileHover="hovered"
            className="button__border"
          >
            <b.Button variants={TransparentButtonMotion}>
              Download Slack
            </b.Button>
          </Button>
        </b.Box>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  background-color: white;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    padding: 25px;
    margin-bottom: 7px;
  }
  .content {
    padding-right: 5px;
  }
`;

const IconWrapper = styled(b.Box)`
  &.logo {
    svg {
      width: 100px;
      height: auto;

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
  &.arrow {
    margin-right: 16px;
    svg {
      width: 10px;
    }
  }
`;

export const IconButtonWrapper = styled(b.Button)`
  &.close {
    margin-right: 8px;
    svg {
      width: 16px;
    }
  }
`;

const Option = styled(b.Box)`
  padding: 17px 25px;
  p {
    font-family: "SlackLato-Regular";
    font-size: 17px;
  }
`;

const Buttons = styled(b.Box)`
  position: absolute;
  bottom: 10px;
  width: 100%;
  background-color: white;

  & > div {
    display: block;
    padding: 15px;
    @media ${size.md} {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
    }
  }
`;

const Button = styled(b.AnimatedBox)`
  & > button {
    font-size: 14px;
    font-family: "CircularPro-Bold";

    letter-spacing: 1px;
    width: 100%;
    padding: 20px 0;
    text-transform: uppercase;
    height: 60px;
    @media ${size.lg} {
      width: auto;
      padding: 0 40px;
    }
  }
  &.button__filled {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    & > button {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.button__border {
    border-radius: 6px;
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.md} {
      margin-top: 0;
      margin-left: 15px;
    }
    & > button {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary__light};
      color: ${({ theme }) => theme.colors.primary__light};
    }
  }
`;
