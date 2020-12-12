import React from "react";
import * as b from "global/blocks";
import { Warning } from "assets/svg";
import styled from "styled-components";

export const ErrorDialog: React.FC<{ error?: string }> = ({
  error = "Error!",
}) => {
  return (
    <b.Box>
      <b.Flex justifyContent="center">
        {error && (
          <ErrorBox backgroundColor="pink__lighter">
            <b.Flex alignItems="center">
              <IconWrapper className="warning" mr={2}>
                <Warning />
              </IconWrapper>
              <b.Box py={2}>
                <b.Text fontFamily="SlackLato-Regular" fontSize={14}>
                  {error}
                </b.Text>
              </b.Box>
            </b.Flex>
          </ErrorBox>
        )}
      </b.Flex>
    </b.Box>
  );
};

const ErrorBox = styled(b.Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  padding: 10px;
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.warning {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.pink};
      }
      rect {
        fill: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;
