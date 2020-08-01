import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints;
import { signin } from 'global/sizes';

export const Content = styled(b.Box)`
  width: 100%;
  max-width: 620px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  border-radius: 5px;
`;

export const ContentInner = styled(b.Box)`
  max-width: 330px;
  width: 100%;
`;

export const WorkspaceInput = styled.input`
  border-radius: 4px;
  border: 1px solid gray;
  padding: 10px 5px;
  text-align: right;
  font-size: 18px;
`;

export const CreateWorkspaceWrapper = styled(b.Box)`
  margin: 16px 0;

  @media ${signin.sm} {
    margin: 32px 0;
  }
`;

export const CreateWorkspaceContainer = styled(b.Flex)`
  display: block;
  text-align: center;
  @media ${signin.sm} {
    display: flex;
    text-align: left;
  }

  div {
    @media ${signin.sm} {
      margin: 0;
    }
  }

  div:first-child {
    margin-bottom: 3px;
    margin-right: 0px;

    @media ${signin.sm} {
      margin-right: 5px;
      margin-bottom: 0px;
    }
  }

  a {
    margin-top: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  margin-left: 10px;
  svg {
    width: 13px;
    height: 13px;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
