import * as React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Header } from 'components/Header';
import { Banner } from 'components/Landing/Banner';
import { BringTeam } from 'components/Landing/BringTeam';
import { BetterSoftware } from 'components/Landing/BetterSoftware';
import { Choose } from 'components/Landing/Choose';
import { Footer } from 'components/Footer';

// Graphql
import { useMeQuery } from 'generated/graphql';
import { LandingModal } from 'components/Modal/Landing';

import { useToggleState } from 'context/toggle-context';

// styles
import { ModalWrapper } from 'styles/Landing';

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
