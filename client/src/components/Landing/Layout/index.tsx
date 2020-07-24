import * as React from 'react';
import { useEffect } from 'react';

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

interface Props {}

export const Landing: React.FC<Props> = () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

  const { data } = useMeQuery();

  const state = useToggleState();

  return (
    <>
      {state.landing ? (
        <ModalWrapper>
          <LandingModal />
        </ModalWrapper>
      ) : (
        <>
          <Header data={data} />
          <Banner />
          <BreakOut />
          <Choose />
          <Footer />
        </>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
