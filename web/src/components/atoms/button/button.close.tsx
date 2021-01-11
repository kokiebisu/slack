import { Close } from "assets/svg";
import styled from "styled-components";
import * as b from "global/blocks";

export const CloseButton: React.FC<{}> = () => {
  return (
    <Box p={12} borderRadius={6}>
      {/* <b.Flex> */}
      <Close width={15} height={15} />
      {/* </b.Flex> */}
    </Box>
  );
};

const Box = styled(b.Box)`
  :hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
  svg {
    fill: ${({ theme }) => theme.colors.gray__light};
    :hover {
      fill: ${({ theme }) => theme.colors.gray__darker};
    }
  }
`;
