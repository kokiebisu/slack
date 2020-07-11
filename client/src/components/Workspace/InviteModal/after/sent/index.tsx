import React from 'react';
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Section } from './index.styles';

interface Props {
  email: string;
  name: string;
}

export const Sent: React.FC<Props> = ({ email, name }) => {
  return (
    <Wrapper>
      <b.Flex>
        <Section>
          <b.Text>{email}</b.Text>
        </Section>
        <Section>
          <b.Text>{name}</b.Text>
        </Section>
      </b.Flex>
    </Wrapper>
  );
};
