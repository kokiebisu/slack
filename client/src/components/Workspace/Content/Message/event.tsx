import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from 'styles/blocks';

export const MessageJoined = () => {
  return (
    <Wrapper>
      <b.Text>joined #general</b.Text>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  & p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;
