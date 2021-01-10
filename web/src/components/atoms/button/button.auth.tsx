import { GoogleLogo } from "assets/svg";

import * as b from "global/blocks";
import { useContext } from "react";

import { ThemeContext } from "styled-components";

export const AuthButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={4} py={2} border="2px solid" borderColor={theme.colors.blue}>
      <b.Flex>
        <b.Box>
          <GoogleLogo />
        </b.Box>
        <b.Box>
          <b.Text>Continue with Google</b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
