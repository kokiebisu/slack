import React from "react";

// Blocks
import * as b from "global/blocks";

// Svg
import { Clipboard } from "assets/svg";

import styled from "styled-components";

export const DraftContent: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent="center" alignItems="center">
        <Content>
          <IconWrapper className="clipboard">
            <Clipboard />
          </IconWrapper>
          <Title pt={3} pb={2}>
            <b.Text>Draft messages to send when you’re ready</b.Text>
          </Title>
          <Description>
            <b.Text>
              Start typing a message anywhere, then find it here. Re-read,
              revise, and send whenever you’d like.
            </b.Text>
          </Description>
          <NewMessage mt={3} py={2} px={2} borderRadius={5}>
            <b.Text>New Message</b.Text>
          </NewMessage>
        </Content>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 100%;
`;

const Content = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

const IconWrapper = styled(b.Box)`
  &.clipboard {
    svg {
      width: 26px;
      height: 26px;
      path {
        fill: ${({ theme }) => theme.colors.primary__light};
      }
    }
  }
`;

const Title = styled(b.Box)`
  & > p {
    font-size: 17px;
    font-family: "SlackLato-Bold";
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Description = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

const NewMessage = styled(b.Button)`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  & > p {
    font-size: 15px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.black__light};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;
