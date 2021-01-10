import * as React from "react";
import * as b from "../../../global/blocks";
import { useParams } from "react-router-dom";

// Styles
import { Message } from "./Message";
import { Heart } from "../../../assets/svg";
import {
  IconWrapper,
  SlackBot,
  Name,
} from "../../../styles/Workspace/Sidebar/Messages";

interface Props {}

export const Messages: React.FC<Props> = () => {
  const { teamId } = useParams<{ teamId: string }>();
  return (
    <b.Box>
      <SlackBot py={2}>
        <b.Flex alignItems="center">
          <IconWrapper className="heart" pr={2}>
            <Heart />
          </IconWrapper>
          <Name>
            <b.Text
              fontFamily="SlackLato-Light"
              color="pink__lighter"
              fontSize={15}
            >
              Slackbot
            </b.Text>
          </Name>
        </b.Flex>
      </SlackBot>
    </b.Box>
  );
};

//  {/* {usersData &&
//     usersData.users &&
//     usersData.users.users!.map((user, index) => {
//       return (
//         <Message
//           key={index}
//           name={user.fullname}
//           teamId={teamId}
//           userId={user.id}
//         />
//       );
//     })} */}
