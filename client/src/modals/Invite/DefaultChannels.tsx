import * as React from "react";
import styled from "styled-components";
// Blocks
import * as b from "global/blocks";

// Svgs
import { Link } from "assets/svg";

export const DefaultChannels = () => {
  return (
    <Wrapper>
      <Header>
        <b.Text>Default Channels</b.Text>
      </Header>
      <ChannelInput>
        <input />
      </ChannelInput>
      <Description>
        <b.Text>
          New <span>members</span> will automatically join these channels and
          #general <span>change defaults</span>
        </b.Text>
      </Description>
      <Share>
        <b.Flex>
          <IconWrapper className="link" mr={1}>
            <Link />
          </IconWrapper>
          <b.Box>
            <b.Text>Share invite link</b.Text>
          </b.Box>
        </b.Flex>
      </Share>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)``;

const Header = styled(b.Box)`
  margin-bottom: 10px;

  & > p {
    font-size: 14px;
    font-family: "SlackLato-Bold";
  }
`;

const ChannelInput = styled(b.Box)`
  width: 100%;
  margin-bottom: 10px;

  & > input {
    width: 100%;
    padding: 7px 3px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray__light};
  }
`;

const IconWrapper = styled(b.Box)`
  &.link {
    & > svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
`;

const Description = styled(b.Box)`
  margin-bottom: 25px;
  & > p {
    font-size: 14px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.gray__light};
    & > span {
      font-family: "SlackLato-Bold";
    }
  }
`;

const Share = styled(b.Box)`
  & p {
    font-size: 14px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;
