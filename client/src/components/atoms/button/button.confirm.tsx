import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";

/** components */
import { Animation } from "components/animation/animation.component";

export const ConfirmButton: React.FC<{ loading?: boolean }> = ({
  loading = false,
}) => {
  return (
    <Wrapper className="confirmbutton" type="submit" disabled={loading}>
      <b.Flex justifyContent="center" alignItems="center">
        <b.Box
          variants={confirmVariants}
          animate={loading ? "loading" : "loaded"}
        >
          <b.Text color="white" fontFamily="SlackLato-Bold">
            Confirm
          </b.Text>
        </b.Box>
        {loading && <Animation variant="loading" />}
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Button)`
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