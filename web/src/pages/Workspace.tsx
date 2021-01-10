import { Redirect, useParams } from "react-router-dom";

// Styles
import { Wrapper, ContentWrapper } from "../styles/Workspace";

// Components
import { Header } from "../components/organisms/header/header.component";
import { Sidebar } from "../components/organisms/sidebar";
import { Toggle } from "../components/molecules/toggle";
import { Modal } from "../components/organisms/modal/modal.component";

// Queries

import { useToggleState } from "../context/toggle-context";
import { useEffect } from "react";

interface Props {
  route?: React.ReactNode;
}

export const WorkspacePage: React.FC<Props> = ({ route }) => {
  const state = useToggleState();

  const { teamId } = useParams<{ teamId: string }>();
  localStorage.setItem("teamId", teamId);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <>
      <Wrapper>
        {state.channel && <Modal variant="channel" />}
        {state.invite && <Modal variant="invite" />}
        <Header variant="workspace" />
        {state.menu ? <Toggle variant="menu" /> : null}
        <ContentWrapper>
          <Sidebar />
          {route}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};
