import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svg
import { Clipboard } from '../../../assets/svg/DraftPage';

interface Props {
  group: string;
}

export const DraftPage: React.FC<Props> = ({ group }) => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <b.Box>
            <b.Text color='black' fontFamily='SlackLato-Black' fontSize={15}>
              Drafts
            </b.Text>
          </b.Box>
          <b.Box style={{ margin: '4px 0' }}>
            <b.Text fontSize={13} fontFamily='SlackLato-Regular' color='gray'>
              No drafts
            </b.Text>
          </b.Box>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <IconWrapper>
            <Clipboard />
          </IconWrapper>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily='SlackLato-Bold' color='black'>
              Draft messages to send when you’re ready
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='gray__light'>
              Start typing a message anywhere, then find it here. Re-read,
              revise, and send whenever you’d like.
            </b.Text>
          </b.Box>
          <NewMessageWrapper mt={3} py={2} px={2} borderRadius={5}>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='black__light'>
              New Message
            </b.Text>
          </NewMessageWrapper>
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: inherit;
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(b.Box)`
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
`;

const TopContainer = styled(b.Box)`
  padding: 0 19px;
  height: auto;
`;

const BottomWrapper = styled(b.Flex)`
  height: auto;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

const NewMessageWrapper = styled(b.Button)`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

const IconWrapper = styled(b.Box)`
  svg {
    width: 26px;
    height: 26px;
    path {
      fill: ${({ theme }) => theme.colors.primary__light};
    }
  }
`;
