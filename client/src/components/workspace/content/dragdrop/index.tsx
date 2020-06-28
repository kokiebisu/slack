import React from 'react';
import * as b from '../../../../styles/blocks';

import { Wrapper, Title, Description } from './index.styles';

export const DragDrop = () => {
  return (
    <Wrapper>
      <b.Flex>
        <Title>
          <b.Text>Upload to コーディングスクール（仮）</b.Text>
        </Title>
        <Description>
          <b.Text>Hold Shift to share immediately o #general</b.Text>
        </Description>
      </b.Flex>
    </Wrapper>
  );
};
