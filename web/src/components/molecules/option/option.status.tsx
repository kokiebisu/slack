import { useContext } from "react";
import { Smile } from "assets/svg";
import styled, { ThemeContext } from "styled-components";

import * as b from "../../../global/blocks";

export const StatusOption: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      mt={3}
      mr={4}
      mb={1}
      ml={4}
      border="1px solid"
      borderColor={theme.colors.gray__lighter}
      borderRadius={5}
      bgColor="#ffffff"
    >
      <b.Box py={2}>
        <b.Flex alignItems="center">
          <b.Box>
            <IconWrapper className="smile">
              <Smile />
            </IconWrapper>
          </b.Box>
          <b.Box ml={3}>
            <b.Text fontSize={15} color="gray__light">
              Update your status
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};

const IconWrapper = styled.div`
  &.smile {
    margin: 0 5px;
    padding: 1.5px;

    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
