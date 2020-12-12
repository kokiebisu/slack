import styled from "styled-components";
import * as b from "global/blocks";

export const Wrapper = styled(b.Box)`
  height: 90px;
  /* padding: 25px 0; */
  max-width: 570px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
`;

export const IconWrapper = styled(b.Box)`
  margin-right: 15px;
`;

export const Icon = styled(b.Box)`
  width: 38px;
  height: 38px;
  border-radius: 5px;
  background-color: blue;
`;

export const WorkspaceName = styled(b.Box)`
  margin-bottom: 5px;
  & > p {
    font-family: "SlackLato-Bold";
  }
`;

export const WorkspaceURL = styled(b.Box)`
  & > p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;
