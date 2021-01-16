import { WriteIcon } from "assets/svg";
import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const NewButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box width={35} height={35} bg={theme.colors.white} borderRadius={9999}>
      <b.Flex justifyContent="center" alignItems="center">
        <b.Box>
          <WriteIcon width={15} height={15} fill={theme.colors.primary} />
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
