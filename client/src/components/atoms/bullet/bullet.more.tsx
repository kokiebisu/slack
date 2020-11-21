import React from 'react';
import * as b from 'global/blocks';
import { MoreBulletProps } from './props';
import styled from 'styled-components';
import { size } from 'global/sizes';

export const MoreBullet: React.FC<MoreBulletProps> = ({ more = 'Content' }) => {
  return (
    <Wrapper>
      <Flex>
        <b.Text>Learn more about {more}</b.Text>
        <b.Text>&nbsp;→</b.Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Anchor)`
  display: block;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
`;

const Flex = styled(b.Flex)`
  justify-content: center;
  @media ${size.lg} {
    justify-content: flex-start;
  }
`;