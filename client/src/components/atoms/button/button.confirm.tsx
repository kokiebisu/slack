import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";

export const ConfirmButton: React.FC<{ loading?: boolean }> = ({
  loading = false,
}) => {
  return (
    <Wrapper className="confirmbutton">
      <b.Flex justifyContent="center" alignItems="center">
        <b.Box
          variants={confirmVariants}
          animate={loading ? "loading" : "loaded"}
        >
          <b.Text color="white" fontFamily="SlackLato-Bold">
            Confirm
          </b.Text>
        </b.Box>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__light};
  }
`;

const confirmVariants = {
  loading: {
    x: -15,
  },
  loaded: {
    x: 0,
  },
};
