import * as React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Header } from '../Header/Layout';
import { Banner } from '../Banner/Layout';
import { BreakOut } from '../Breakout/Layout';
import { Choose } from '../Choose/Layout';
import { Footer } from '../Footer/Layout';

// Graphql
import { useMeQuery } from '../../../generated/graphql';
import { LandingModal } from '../Modal/layout';
import styled from 'styled-components';
import { useToggleState } from '../../../context/toggle-context';
import { Box } from '../../../styles/blocks';

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
            transition={{ duration: 0.4 }}>
            <LandingModal />
          </ModalWrapper>
        )}
      </AnimatePresence>
      <Header data={data} />
      <Banner />
      <BreakOut />
      <Choose />
      <Footer />
    </>
  );
};

const ModalWrapper = styled(Box)`
  background-color: white;
  position: absolute;
  z-index: 200;
  right: -500px;
  height: 100vh;
`;
