import React from "react";
import { AngleRight } from "assets/svg/Icons";
import styled from "styled-components";
import * as b from "global/blocks";

export interface MenuOptionProps {
  name?: string;
  withToggle?: boolean;
  openApp?: boolean;
  clicked?: any;
}

export const MenuOption: React.FC<MenuOptionProps> = ({
  name,
  withToggle,
  openApp,
  clicked,
}) => {
  return (
    <MenuOptionWrapper onClick={clicked} width={1} py={1} px={4}>
      <b.Flex justifyContent="space-between" alignItems="center">
        <b.Box>
          <b.Text fontSize={15} fontFamily="SlackLato-Regular" color="gray">
            {name}
          </b.Text>
        </b.Box>
        {(withToggle || openApp) && (
          <b.Box>
            <b.Flex>
              {openApp ? (
                <IconWrapper className="slackapp">
                  <b.Box>{/* <img src={SlackAppIcon} alt="icon" /> */}</b.Box>
                </IconWrapper>
              ) : (
                <IconWrapper className="angleright">
                  <AngleRight />
                </IconWrapper>
              )}
            </b.Flex>
          </b.Box>
        )}
      </b.Flex>
    </MenuOptionWrapper>
  );
};

const MenuOptionWrapper = styled(b.Button)`
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  &.slackapp {
    left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
    border-radius: 100%;

    & > div {
      width: 18px;
      height: 18px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &.angleright {
    svg {
      width: 10px;
      height: 10px;
    }
  }
`;
