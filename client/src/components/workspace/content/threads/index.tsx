import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../../styles/blocks';

// Image
import Leaf from '../../../../assets/img/leaf.png';

// Hooks
import { useTabTitle } from '../../../../hooks/useTabTitle';

// Styles
import {
  Wrapper,
  IconWrapper,
  Title,
  Description,
  LearnButton,
} from './index.styles';

// Components
import { ClientContentLayout } from '../layout';

interface Props {}

export const ThreadsPage: React.FC<Props> = () => {
  const group = 'temp';
  useTabTitle('Threads', group);

  return (
    <ClientContentLayout
      section='Threads'
      subsection='No new replies'
      content={<ContentLayout />}
    />
  );
};

const ContentLayout = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <b.Box>
          <IconWrapper className='leaf'>
            <img src={Leaf} alt='leaf' />
          </IconWrapper>
          <Title pt={3} pb={2}>
            <b.Text>Tend to your threads</b.Text>
          </Title>
          <Description>
            <b.Text>
              Threads you’re involved in will be collected right here.
            </b.Text>
          </Description>
          <LearnButton py={3}>
            <b.Text>Learn about threads</b.Text>
          </LearnButton>
        </b.Box>
      </b.Flex>
    </Wrapper>
  );
};
