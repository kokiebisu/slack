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
        <b.Grid gridTemplateColumns={`260px 1fr`}>
          <WorkspaceSidebar>{sidebar}</WorkspaceSidebar>
          <b.Box>{content}</b.Box>
        </b.Grid>
      </b.Box>
    </Wrapper>
  );
};

export const Wrapper = styled(b.Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px 1fr;
  overscroll-behavior: none;
`;

export const WorkspaceHeader = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WorkspaceSidebar = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary__light};
`;
