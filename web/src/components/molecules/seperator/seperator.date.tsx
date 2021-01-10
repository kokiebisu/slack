import * as React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

// Components
import { BottomArrow } from "../../../assets/svg";

export const DateSeperator: React.FC<{ date?: string }> = ({
  date = "Date",
}) => {
  return (
    <Wrapper>
      <b.Box className="divider" />
      <b.Box className="date_modal">
        <b.Box>
          <b.Flex alignItems="center">
            <Date mr={2}>
              <b.Text>{date}</b.Text>
            </Date>
            <IconWrapper className="bottom_arrow">
              <BottomArrow />
            </IconWrapper>
          </b.Flex>
        </b.Box>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  & div {
    &.divider {
      height: 100%;
      position: relative;
      width: 100%;
      height: 1px;
      margin-top: 30px;

      background-color: ${({ theme }) => theme.colors.gray__lighter};
    }
    &.date_modal {
      position: absolute;
      left: 50%;
      top: -15px;
      height: 70px;

      & > div {
        position: sticky;
        top: 8px;
        height: 30px;

        max-width: 200px;
        transform: translateX(-50%);
        border-radius: 15px;
        padding: 6px 18px;
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Date = styled(b.Box)`
  & > p {
    font-size: 13px;
    font-family: "SlackLato-Bold";
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.bottom_arrow {
    bottom: 1px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;
