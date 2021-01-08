import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";

export const ConfirmButton: React.FC<{ loading?: boolean }> = ({
  loading = false,
}) => {
  return (
    <Wrapper
      display="inline-block"
      width={1}
      borderRadius={5}
      px={6}
      py={3}
      className="confirmbutton"
    >
      <b.Flex justifyContent="center" alignItems="center">
        <b.AnimatedBox
          variants={confirmVariants}
          animate={loading ? "loading" : "loaded"}
        >
          <b.Text textAlign="center" color="white" fontFamily="SlackLato-Bold">
            Confirm
          </b.Text>
        </b.AnimatedBox>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
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
