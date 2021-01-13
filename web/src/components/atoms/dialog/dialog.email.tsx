import { Sparkle } from "assets/svg";
import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const EmailDialog: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box py={3} px={3} borderRadius={10} bg={theme.colors.white__dark}>
      <b.Flex>
        <b.Box mr={3}>
          <Sparkle width={10} height={10} fill={theme.colors.gray__light} />
        </b.Box>
        <b.Box>
          <b.Text fontSize={14} color={theme.colors.gray__light}>
            We’ll email you a magic code for a password-free sign in. Or you can
            sign in manually instead.
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
