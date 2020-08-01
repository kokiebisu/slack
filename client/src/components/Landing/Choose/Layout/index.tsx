import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  Header,
  Buttons,
  Button,
} from 'components/Landing/Choose/Layout/index.styles';

interface Props {}

export const Choose: React.FC<Props> = () => {
  return (
    <Wrapper>
      <b.Container>
        <Header mb={4}>
          <b.Text>Choose a better way to work</b.Text>
        </Header>
        <b.Box>
          <Buttons>
            <b.Box>
              <Button>
                <b.Button className='button__filled'>
                  <b.Text>Try Slack</b.Text>
                </b.Button>
              </Button>
              <Button>
                <b.Button className='button__transparent'>
                  <b.Text>Contact Sales</b.Text>
                </b.Button>
              </Button>
            </b.Box>
          </Buttons>
        </b.Box>
      </b.Container>
    </Wrapper>
  );
};
