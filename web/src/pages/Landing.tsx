import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "styled-components";
import * as b from "../global/blocks";
import { Header } from "../components/organisms/header/header.component";

import { Footer } from "../components/organisms/footer/footer.component";
import { useMeQuery, useMyTeamsQuery } from "../generated/graphql";
import { Modal } from "../components/organisms/modal/modal.component";
import { useToggleState } from "../context/toggle-context";
import { ModalWrapper } from "../styles/Landing";
import { Prototype } from "../components/prototype/landing/landing.component";

export const LandingPage: React.FC<{}> = () => {
  useEffect(() => {
    document.title = "Where work happens | Slack";
  }, []);

  const state = useToggleState();
  const theme = useContext(ThemeContext);
  return (
    <>
      <AnimatePresence>
        {state.landing && (
          <ModalWrapper
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Modal variant="landing" />
          </ModalWrapper>
        )}
      </AnimatePresence>
      <b.Box zIndex={100} backgroundColor={theme.colors.white__darker}>
        <b.Container>
          <Header variant="landing" />
        </b.Container>
      </b.Box>
      <Prototype variant="banner" />
      <Prototype variant="together" />
      <Prototype variant="software" />
      <Prototype variant="choose" />
      <Footer variant="landing" />
    </>
  );
};
