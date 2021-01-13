import * as b from "global/blocks";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

export const ModalButton: React.FC<{
  transparent?: boolean;
  label?: string;
  bg?: string;
}> = ({ transparent = false, label = "Button", bg }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      py={2}
      px={3}
      borderRadius={4}
      border="1px solid"
      borderColor={transparent ? theme.colors.gray__lighter : bg}
      bg={bg}
    >
      <b.Text
        fontSize={15}
        fontFamily="SlackLato-Bold"
        color={transparent ? theme.colors.gray__darker : theme.colors.white}
      >
        {label}
      </b.Text>
    </b.Box>
  );
};
