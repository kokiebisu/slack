import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Img
import Thumbsup from "assets/img/thumbsup.png";

import { Button } from "components/atoms/button/button.component";

export const ActivityCard: React.FC<{}> = () => {
  return (
    <Wrapper p={3}>
      <b.Box>
        <b.Text fontSize={13} color="gray__light" fontFamily="SlackLato-Bold">
          Thomas Bui - Set E &nbsp;
          <b.Span fontFamily="SlackLato-Regular">
            reacted to your message
          </b.Span>
        </b.Text>
      </b.Box>
      <b.Box mt={2}>
        <Content>
          <IconWrapper>
            <img src={Thumbsup} alt="icon" />
          </IconWrapper>
          <b.Box>
            <b.Box>
              <b.Flex alignItems="center">
                <Name mr={2}>
                  <b.Text color="black__light" fontFamily="SlackLato-Black">
                    ken
                  </b.Text>
                </Name>
                <Time>
                  <b.Text
                    color="gray__light"
                    fontFamily="SlackLato-Regular"
                    fontSize={13}
                  >
                    Yesterday at 2:44 PM
                  </b.Text>
                </Time>
              </b.Flex>
            </b.Box>
            <Message mt={1} mb={2}>
              <b.Text>Too</b.Text>
            </Message>
            <b.Box mt={1}>
              <Button variant="reaction" />
              <Button variant="reaction" />
            </b.Box>
          </b.Box>
        </Content>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

const IconWrapper = styled(b.Box)`
  img {
    width: 30px;
    height: 30px;
  }
`;

const Content = styled(b.Box)`
  display: grid;
  grid-template-columns: 50px auto;
`;

const Name = styled(b.Box)`
  position: relative;
  bottom: 1px;
`;

const Time = styled(b.Box)`
  p {
    color: ${({ theme }) => theme.colors.gray__light};
    font-family: "SlackLato-Regular";
    font-size: 13px;
  }
`;

const Message = styled(b.Box)`
  text-align: left;

  p {
    color: ${({ theme }) => theme.colors.black__light};
    font-family: "SlackLato-Regular";
    font-size: 13px;
  }
`;

const ToolBoxWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
`;
