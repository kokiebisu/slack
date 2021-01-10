import * as React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "components/layout/layout.component";
import * as b from "global/blocks";

import styled from "styled-components";
import { Info } from "assets/svg";
// Query

import { Content } from "components/organisms/content/content.component";

export const DirectMessageWorkspace: React.FC<{}> = () => {
  const { userId } = useParams<{ userId: string }>();
  // const { data: userData } = useUserQuery({ variables: { userId } });
  // ${userData?.user.user?.fullname}
  return (
    <>
      <Layout
        variant="workspace"
        section={`df`}
        content={<Content variant="directmessage" />}
        options={
          <b.Box>
            <b.Flex alignItems="center">
              <IconWrapper className="sideoption" mr={2}>
                <Info />
              </IconWrapper>
              <b.Box>
                <b.Text fontSize={14} fontFamily="SlackLato-Regular">
                  Details
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
        }
      />
    </>
  );
};

const IconWrapper = styled(b.Box)`
  &.sideoption {
    padding: 8px 10px 6px 10px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }: any) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }: any) => theme.colors.gray};
      }
    }
  }
`;
