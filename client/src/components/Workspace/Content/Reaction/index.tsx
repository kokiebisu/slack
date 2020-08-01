import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Imgs
import Thumbsup from 'assets/img/thumbsup.png';

// Styles
import {
  Wrapper,
  Container,
} from 'components/Workspace/Content/Reaction/index.styles';

interface Props {}

export const Reaction: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container alignItems='center'>
        <b.Box mr={1}>
          <img width={14} height={14} src={Thumbsup} alt='icon' />
        </b.Box>
        <b.Box>
          <b.Text fontSize={11} fontFamily='SlackLato-Regular'>
            1
          </b.Text>
        </b.Box>
      </Container>
    </Wrapper>
  );
};
