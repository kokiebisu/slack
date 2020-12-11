import React, { useState } from "react";
import styled from "styled-components";
import * as b from "global/blocks";

/** assets */
import { RightArrow } from "assets/svg";

export const LaunchCard: React.FC<{
  name?: string;
  url?: string;
  color?: string;
}> = ({ name = "workspace", url, color = "red" }) => {
  const [hovered, setHovered] = useState({
    launch: false,
  });

  return (
    <Wrapper href={`/client/${url}`}>
      <b.Box
        onMouseEnter={() => {
          setHovered({ ...hovered, launch: true });
        }}
        onMouseLeave={() => {
          setHovered({ ...hovered, launch: false });
        }}
      >
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box>
            <b.Flex alignItems="center">
              <Avatar mr={3}>
                <b.Box backgroundColor={color}>
                  <b.Flex alignItems="center" justifyContent="center">
                    <AvatarLetter>
                      <b.Text>{name.charAt(0).toUpperCase()}</b.Text>
                    </AvatarLetter>
                  </b.Flex>
                </b.Box>
              </Avatar>
              <Name>
                <b.Text
                  fontFamily="CircularPro-Bold"
                  fontSize={17}
                  className={hovered.launch ? `hovered` : ``}
                >
                  {name}
                </b.Text>
              </Name>
            </b.Flex>
          </b.Box>
          <IconWrapper
            variants={launchArrow}
            animate={hovered.launch ? "animate" : "initial"}
          >
            <RightArrow />
          </IconWrapper>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Anchor)`
  & > div {
    padding: 15px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.white__dark};
  }
`;

const Name = styled(b.Box)`
  & > p {
    color: #1d1d1d;

    &.hovered {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Avatar = styled(b.Box)`
  & > div {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

const AvatarLetter = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.white};
    font-family: "SlackLato-Bold";
    font-size: 18px;
  }
`;

const IconWrapper = styled(b.Box)`
  svg {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const launchArrow = {
  initial: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.5,
    },
  },
};
