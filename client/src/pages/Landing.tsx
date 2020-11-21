import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import * as b from 'global/blocks';
import { Header } from 'components/organisms/header/header.component';
import { Banner } from 'components/organisms/banner/banner.component';
import { Footer } from 'components/organisms/footer/footer.component';
import { useMeQuery, useMyTeamsQuery } from 'generated/graphql';
import { LandingModal } from 'modals/Landing';
import { useToggleState } from 'context/toggle-context';
import { ModalWrapper } from 'styles/Landing';
import { Section } from 'components/organisms/section/section.component';

export const Landing: React.FC<{}> = () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

  const { data: meData } = useMeQuery();
  const { data: teamsData, loading } = useMyTeamsQuery();
  const state = useToggleState();

  return (
    <>
      <AnimatePresence>
        {state.landing && (
          <ModalWrapper
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}>
            <LandingModal />
          </ModalWrapper>
        )}
      </AnimatePresence>
      <HeaderWrapper>
        <b.Container>
          <Header type='landing' data={teamsData} loading={loading} />
        </b.Container>
      </HeaderWrapper>
      <Banner type='landing' />
      <Section type='together' />
      <Section type='software' />
      <Section type='choose' />
      <Footer type='landing' />
    </>
  );
};

const HeaderWrapper = styled.div`
  z-index: 9999;
  background-color: white;
  position: sticky;
  top: 0;
  border-bottom: 1px solid lightgray;
`;
