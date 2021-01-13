import * as React from "react";
import styled from "styled-components";

// Blocks
import * as b from "../../global/blocks";

export const WorkspaceLayout: React.FC<{
  header?: JSX.Element;
  sidebar?: JSX.Element;
  content?: JSX.Element;
}> = ({
  header,
  sidebar = <b.Text>sidebar</b.Text>,
  content = <b.Text>Content</b.Text>,
}) => {
  return (
    <Wrapper>
      <WorkspaceHeader>{header}</WorkspaceHeader>
      <b.Box>
        <b.Flex>
          <WorkspaceSidebar>{sidebar}</WorkspaceSidebar>
          <WorkspaceContent height="100%">{content}</WorkspaceContent>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};

export const Wrapper = styled(b.Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px calc(100vh - 37px);
  overscroll-behavior: none;
`;

export const WorkspaceHeader = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WorkspaceSidebar = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary__light};
  width: 260px;
`;

export const WorkspaceContent = styled(b.Box)`
  width: calc(100% - 260px);
`;
