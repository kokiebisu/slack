import { GoogleLogo } from "assets/svg";

import * as b from "global/blocks";
import { useContext } from "react";

import { ThemeContext } from "styled-components";

export const AuthButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      width={1}
      px={4}
      py={2}
      borderRadius={6}
      border="2px solid"
      borderColor={theme.colors.purple__light}
    >
      <b.Flex alignItems="center" justifyContent="center">
        <b.Box mr={3}>
          <GoogleLogo width={18} height={18} />
        </b.Box>
        <b.Box>
          <b.Text
            fontSize={18}
            fontFamily="SlackLato-Bold"
            color={theme.colors.purple__light}
          >
            Continue with Google
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
