import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';

// Imgs
import Thumbsup from '../../assets/img/thumbsup.png';

// Svgs
import { SmilePlus } from '../../assets/svg/Reaction';

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

const Wrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  display: flex;
  align-items: center;
  padding: 0px 8px;
  border-radius: 15px;
  margin-right: 5px;

  &:hover {
    padding: 0px 7px;
    border: 1px solid ${({ theme }) => theme.colors.gray__dark};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Container = styled(b.Flex)`
  height: auto;
`;

export const Reactions: React.FC<Props> = () => {
  return (
    <b.Box>
      <b.Flex>
        <Reaction />
        <IconWrapper>
          <SmilePlus />
        </IconWrapper>
      </b.Flex>
    </b.Box>
  );
};

const IconWrapper = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  display: inline-block;
  padding: 1px 7px;
  border-radius: 15px;
  margin-right: 5px;
  svg {
    width: 22px;
    height: 22px;
    path {
      fill: ${({ theme }) => theme.colors.gray__light};
    }
  }

  &:hover {
    padding: 0px 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray__dark};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
