import * as React from "react";

/** styles */
import * as b from "global/blocks";
import styled from "styled-components";

// Breakpoints
import { size } from "global/sizes";

/** vectors */
import { Clock, Info } from "assets/svg";
import { Button } from "components/atoms/button";

export const ClientHeader: React.FC<{}> = () => {
  return (
    <b.Box height="100%">
      <b.Flex>
        <b.Box width={1}>
          <b.Flex alignItems="center" justifyContent="center">
            <b.Box height="100%" maxWidth={680} width={1}>
              <b.Flex alignItems="center">
                <b.Box px={3}>
                  <b.Flex style={{ justifyContent: "flex-end" }}>
                    <IconWrapper className="clock">
                      <Clock width={15} height={15} />
                    </IconWrapper>
                  </b.Flex>
                </b.Box>
                <b.Box width={1}>
                  <Button variant="search" extends />
                </b.Box>
                <b.Box px={3}>
                  <b.Flex style={{ justifyContent: "flex-end" }}>
                    <b.Button ml={2} background="transparent">
                      <b.Flex alignItems="center">
                        <IconWrapper className="info">
                          <Info width={15} height={15} />
                        </IconWrapper>
                      </b.Flex>
                    </b.Button>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box pr={3}>avatar</b.Box>
      </b.Flex>
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;

  &.info {
    display: none;
    top: 2px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
    @media ${size["12xs"]} {
      display: block;
    }
  }

  &.clock {
    display: none;
    border-radius: 5px;
    padding: 6px 6px 3px 7px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary__lighter};
    }

    @media ${size["12xs"]} {
      display: block;
    }
  }

  &.present {
    top: 1px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
