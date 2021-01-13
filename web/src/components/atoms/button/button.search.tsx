import * as b from "global/blocks";
/** vectors */
import { Magnify } from "assets/svg";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

export const SearchButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      borderRadius={5}
      height={24}
      border="1.3px solid"
      borderColor={theme.colors.purple}
      px={3}
      width={1}
      bg={theme.colors.primary__lighter}
      color={theme.colors.white__dark}
    >
      <b.Flex alignItems="center" justifyContent="center">
        <b.Box px={1} style={{ top: 1 }}>
          <Magnify width={12} height={12} fill={theme.colors.gray__lighter} />
        </b.Box>
        <b.Box px={1}>
          <b.Text
            fontFamily="SlackLato-Regular"
            fontSize={13}
            color={theme.colors.gray__lighter}
          >
            Search Team
          </b.Text>
        </b.Box>
      </b.Flex>
    </Box>
  );
};

const Box = styled(b.Box)`
  svg {
    fill: ${({ theme }) => theme.colors.white__dark};
  }

  :hover {
    border: 1.3px solid ${({ theme }) => theme.colors.gray__light};
    color: ${({ theme }) => theme.colors.white__dark};
    fill: ${({ theme }) => theme.colors.white__dark};
  }
`;
