import * as React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Header } from 'components/Landing/Header/Layout';
import { Banner } from 'components/Landing/Banner/Layout';
import { BringTeam } from 'components/Landing/BringTeam/Layout';
import { Choose } from 'components/Landing/Choose/Layout';
import { Footer } from 'components/Landing/Footer/Layout';

// Graphql
import { useMeQuery } from 'generated/graphql';
import { LandingModal } from 'components/Landing/Modal/Layout';
import styled from 'styled-components';
import { useToggleState } from 'context/toggle-context';
import { Box } from 'styles/blocks';

// styles
import { ModalWrapper } from 'components/Landing/Layout/index.styles';

// breakpoint
import { size } from 'styles/sizes';

interface Props {}

export const Landing: React.FC<Props> = () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

  const { data } = useMeQuery();

  const state = useToggleState();

  return (
    <>
      <AnimatePresence>
        {state.landing && (
          <ModalWrapper
            animate={{ width: '100%', right: 0 }}
            exit={{ right: -500 }}
            transition={{ duration: 0.3 }}>
            <LandingModal />
          </ModalWrapper>
        )}
      </AnimatePresence>
      <Header data={data} />
      <Banner />
      <BringTeam />
      <Choose />
      <Footer />
    </>
  );
};
