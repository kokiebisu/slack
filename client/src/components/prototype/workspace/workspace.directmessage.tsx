import * as React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "components/layout/layout.component";
import * as b from "global/blocks";

import { Info } from "assets/svg";
// Query
import { useUserQuery } from "generated/graphql";
import { Content } from "components/organisms/content/content.component";

export const DirectMessageWorkspace: React.FC<{}> = () => {
  const { userId } = useParams();
  const { data: userData } = useUserQuery({ variables: { userId } });
  return (
    <>
      <Layout
        variant="workspace"
        section={`${userData?.user.user?.fullname}`}
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
      background-color: ${({ theme }) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
