import React, { useContext } from "react";

import { ThemeContext } from "styled-components";

// Blocks
import * as b from "../../../global/blocks";

// Img
import Thumbsup from "../../../assets/img/thumbsup.png";

import { Button } from "../../atoms/button";

export const ActivityCard: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      mb={6}
      borderRadius={15}
      width={1}
      p={3}
      backgroundColor={theme.colors.white}
      border="1px solid"
      borderColor={theme.colors.white__dark}
    >
      <b.Box>
        <b.Text fontSize={13} color="gray__light" fontFamily="SlackLato-Bold">
          Thomas Bui - Set E &nbsp;
          <b.Span fontFamily="SlackLato-Regular">
            reacted to your message
          </b.Span>
        </b.Text>
      </b.Box>
      <b.Box mt={2}>
        <b.Grid gridTemplateColumns="50px auto">
          <div>
            <img width={30} height={30} src={Thumbsup} alt="icon" />
          </div>
          <b.Box>
            <b.Box>
              <b.Flex alignItems="center">
                <b.Box bottom="1px" mr={2}>
                  <b.Text
                    color={theme.colors.black__light}
                    fontFamily="SlackLato-Black"
                  >
                    ken
                  </b.Text>
                </b.Box>
                <b.Box>
                  <b.Text
                    color={theme.colors.gray__light}
                    fontFamily="SlackLato-Regular"
                    fontSize={13}
                  >
                    Yesterday at 2:44 PM
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
            <b.Box mt={1} mb={2}>
              <b.Text
                textAlign="left"
                color={theme.colors.black__light}
                fontFamily="SlackLato-Regular"
                fontSize={13}
              >
                Too
              </b.Text>
            </b.Box>
            <b.Box mt={1}>
              <Button variant="reaction" />
            </b.Box>
          </b.Box>
        </b.Grid>
      </b.Box>
    </b.Box>
  );
};
