import { Plus } from "assets/svg";

import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const AddButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={12} py={2} bg={theme.colors.blue} borderRadius={4}>
      <b.Flex alignItems="center">
        <b.Box mr={2}>
          <Plus width={10} height={10} fill={theme.colors.white} />
        </b.Box>
        <b.Box>
          <b.Text
            fontSize={12}
            fontFamily="SlackLato-Bold"
            color={theme.colors.white}
          >
            Add
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
