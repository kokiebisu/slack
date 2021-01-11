import React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

export const ConfirmButton: React.FC<{
  label?: string;
  loading?: boolean;
  px?: number;
  py?: number;
}> = ({ label = "Confirm", loading = false, px, py }) => {
  return (
    <Wrapper
      display="inline-block"
      width={1}
      borderRadius={5}
      px={px}
      py={py}
      className="confirmbutton"
    >
      <b.Flex justifyContent="center" alignItems="center">
        <b.AnimatedBox
          variants={confirmVariants}
          animate={loading ? "loading" : "loaded"}
        >
          <b.Text
            textAlign="center"
            color="white"
            fontFamily="SlackLato-Bold"
            fontSize={18}
          >
            {label}
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
