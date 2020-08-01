import * as React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Header } from '../Header/Layout';
import { Banner } from '../Banner/Layout';
import { BringTeam } from '../BringTeam/Layout';
import { BetterSoftware } from '../BetterSoftware/Layout';
import { Choose } from '../Choose/Layout';
import { Footer } from '../Footer/Layout';

// Graphql
import { useMeQuery } from '../../../generated/graphql';
import { LandingModal } from '../Modal/layout';

import { useToggleState } from '../../../context/toggle-context';

import { useToggleState } from 'context/toggle-context';

// styles
import { ModalWrapper } from 'components/Landing/Layout/index.styles';

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
      <BetterSoftware />
      <Choose />
      <Footer />
    </>
  );
};
