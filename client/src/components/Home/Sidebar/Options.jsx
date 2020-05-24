import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../../styles/blocks';
import { Option } from './Option';

export const Options = () => {
  const defaultState = {
    threads: false,
    mention: false,
    drafts: false,
    saved: false,
    people: false,
    app: false,
    files: false,
  };

  const [selected, setSelected] = useState(defaultState);

  return (
    <OptionsWrapper>
      <Container>
        <Option name='threads' />
        <Option name='mention & reaction' />
        <Option name='drafts' />
        <Option name='saved items' />
        <Option name='people' />
        <Option name='apps' />
        <Option name='files' />
        <Option name='show less' />
      </Container>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;

const Container = styled(Box)``;
