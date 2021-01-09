import { Redirect, useParams } from "react-router-dom";

// Styles
import { Wrapper, ContentWrapper } from "../styles/Workspace";

// Components
import { Header } from "../components/organisms/header/header.component";
import { Sidebar } from "../components/organisms/sidebar";
import { MenuToggle } from "../components/Workspace/MenuToggle";
import { Modal } from "../components/organisms/modal/modal.component";

// Queries
import { useMeQuery, useTeamQuery } from "../generated/graphql";
import { useToggleState } from "../context/toggle-context";
import { useEffect } from "react";

interface Props {
  route?: React.ReactNode;
}

export const WorkspacePage: React.FC<Props> = ({ route }) => {
  const state = useToggleState();

  const { teamId } = useParams();
  localStorage.setItem("teamId", teamId);
  const { loading: meLoading, error } = useMeQuery();

  const { loading: teamLoading } = useTeamQuery({
    variables: {
      teamId,
    },
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <>
      <Wrapper>
        {error ? (
          <Redirect to="/" />
        ) : (
          <>
            {!teamLoading && !meLoading && (
              <>
                {state.channel && <Modal variant="channel" />}
                {state.invite && <Modal variant="invite" />}
                <Header variant="workspace" />
                {state.menu ? <MenuToggle /> : null}
                <ContentWrapper>
                  <Sidebar />
                  {route}
                </ContentWrapper>
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
