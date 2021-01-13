import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const ContentLayout: React.FC<{
  header?: JSX.Element;
  content?: JSX.Element;
}> = ({ header, content }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box>
      <b.Box
        height={58}
        borderBottom="1px solid"
        borderColor={theme.colors.white__darker}
      >
        <b.Flex alignItems="center">{header}</b.Flex>
      </b.Box>
      <b.Box>{content}</b.Box>
    </b.Box>
  );
};
