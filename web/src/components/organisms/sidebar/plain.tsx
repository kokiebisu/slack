import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const PlainSidebar: React.FC<{ label?: string }> = ({ label }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box>
      <b.Box
        px={3}
        py={20}
        bg={theme.colors.primary}
        borderBottom="1px solid"
        borderColor={theme.colors.primary__lighter}
      >
        <b.Box>
          <b.Text
            color={theme.colors.white}
            fontSize={13}
            fontFamily="SlackLato-Bold"
          >
            {label}
          </b.Text>
        </b.Box>
      </b.Box>
      <b.Box py={4}>
        <b.Box>
          <b.Box>
            <b.Box px={3} py={1}>
              <b.Text
                fontSize={15}
                color={theme.colors.white__dark}
                fontFamily="SlackLato-Light"
              >
                Channels
              </b.Text>
            </b.Box>
            <b.Box px={22} py={2}>
              <b.Flex alignItems="center">
                <b.Box mr={3}>
                  <b.Text
                    fontSize={15}
                    color={theme.colors.white__dark}
                    fontFamily="SlackLato-Light"
                  >
                    #
                  </b.Text>
                </b.Box>
                <b.Box>
                  <b.Text
                    fontSize={15}
                    color={theme.colors.white__dark}
                    fontFamily="SlackLato-Light"
                  >
                    ran
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Box>
        </b.Box>
      </b.Box>
      <b.Box pb={10}>
        <b.Box>
          <b.Box>
            <b.Box px={3} py={1}>
              <b.Text
                fontSize={15}
                color={theme.colors.white__dark}
                fontFamily="SlackLato-Light"
              >
                Direct messages
              </b.Text>
            </b.Box>
          </b.Box>
        </b.Box>
      </b.Box>
    </b.Box>
  );
};
