import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";

// Image
import Leaf from "assets/img/leaf.png";

export const ThreadContent: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent="center" alignItems="center">
        <b.Box>
          <IconWrapper className="leaf">
            <img src={Leaf} alt="leaf" />
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

const Wrapper = styled(b.Box)`
  height: 100%;
  text-align: center;
`;

const IconWrapper = styled(b.Box)`
  margin: 5px 0;
  &.leaf {
    img {
      width: 60px;
      height: 60px;
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

const LearnButton = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;
