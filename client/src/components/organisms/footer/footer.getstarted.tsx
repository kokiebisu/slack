import React from "react";
import * as b from "global/blocks";
import { Button } from "components/atoms/button/button.component";
import { Globe } from "assets/svg";
import styled from "styled-components";

export const GetStartedFooter: React.FC<{}> = () => {
  return (
    <b.Flex alignItems="center" justifyContent="center">
      <b.Box mr={2}>
        <Button variant="transparent" to="/legal" title="Privacy & terms" />
      </b.Box>
      <b.Box mr={2}>
        <Button variant="transparent" to="/help" title="Contact us" />
      </b.Box>
      <b.Box mr={2}>
        <b.Flex>
          <IconWrapper className="globe" mr={1}>
            <Globe />
          </IconWrapper>
          <b.Box>
            <b.Box>Change region</b.Box>
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Flex>
  );
};

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

  &.boldplus {
    svg {
      width: 13px;
      height: 13px;
      path {
        fill: ${({ theme }) => theme.colors.primary};
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
