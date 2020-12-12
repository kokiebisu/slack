import React from "react";

// Blocks
import * as b from "global/blocks";

// Components
import { Layout } from "components/layout/layout.component";

import styled from "styled-components";
import { Auth } from "components/organisms/auth/auth.component";

export const GetStartedCreate: React.FC<{}> = () => {
  return (
    <Layout variant="center">
      <b.Box py={4}>
        <b.Flex flexDirection="column" alignItems="center">
          <Wrapper>
            <b.Box>
              <b.Text
                fontSize={48}
                color="black__light"
                fontFamily="Larsseit-Bold"
                textAlign="center"
              >
                First, create your account
              </b.Text>
            </b.Box>
            <Auth variant="signup" />
          </Wrapper>
        </b.Flex>
      </b.Box>
    </Layout>
  );
};

const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;
