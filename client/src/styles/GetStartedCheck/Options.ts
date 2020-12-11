import styled from "styled-components";
import * as b from "global/blocks";

export const Wrapper = styled(b.Box)`
  p {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }
`;

export const Option = styled(b.Box)`
  &.option {
    & > p {
      font-family: "SlackLato-Regular";
      font-size: 15px;
    }
  }
`;
