import React from "react";
import { useEffect } from "react";

import * as b from "global/blocks";

import { useParams } from "react-router-dom";

import { MessageHeader } from "components/Workspace/DirectMessage/MessageHeader";

import { Wrapper } from "styles/Workspace/DirectMessage/Container";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { DateSeperator } from "components/Workspace/Content/DateSeperator";
import { Card } from "../../molecules/card";

export const MessageContainer = () => {
  const { userId }: { userId: string } = useParams();

  // const subscribeToNewMessages = (latestUser: string) =>
  //   subscribeToMore({
  //     document: SUBSCRIBE_TO_DIRECT_MESSAGES,
  //     variables: { fromId: latestUser },
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const newMessage = subscriptionData.data.subscribeToDirectMessages;
  //       return Object.assign({}, prev, {
  //         fetchDirectMessages: [...prev.fetchDirectMessages, newMessage],
  //       });
  //     },
  //   });

  // useEffect(() => {
  //   const unsubscribe = subscribeToNewMessages(userId);
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [userId]);

  // const SUBSCRIBE_TO_DIRECT_MESSAGES = gql`
  //   subscription SubscribeToDirectMessages($fromId: String!) {
  //     subscribeToDirectMessages(fromId: $fromId) {
  //       id
  //       fullname
  //       body
  //       avatarBackground
  //       createdAt
  //     }
  //   }
  // `;

  // const FETCH_DIRECT_MESSAGES = gql`
  //   query FetchDirectMessages($fromId: String!) {
  //     fetchDirectMessages(fromId: $fromId) {
  //       id
  //       fullname
  //       body
  //       avatarBackground
  //       createdAt
  //     }
  //   }
  // `;

  // const {
  //   subscribeToMore,
  //   data: fetchDirectMessagesData,
  //   loading: fetchDirectMessagesLoading,
  // } = useQuery(FETCH_DIRECT_MESSAGES, {
  //   variables: { fromId: userId },
  //   fetchPolicy: "cache-and-network",
  // });

  // this gives an object with dates as keys

  // type tplotOptions = {
  //   [key: string]: {
  //     id: number;
  //     fullname: string;
  //     avatarBackground: string;
  //     body: string;
  //     createdAt: string;
  //   }[];
  // };

  // let messagesByDates;

  // if (!fetchDirectMessagesLoading && fetchDirectMessagesData) {
  //   let groups: tplotOptions = fetchDirectMessagesData.fetchDirectMessages.reduce(
  //     (groups: any, message: any) => {
  //       const createdAt = message.createdAt.split(",").slice(0, 2);
  //       if (!groups[createdAt]) {
  //         groups[createdAt] = [];
  //       }
  //       groups[createdAt].push(message);
  //       return groups;
  //     },
  //     {}
  //   );
  //   messagesByDates = Object.keys(groups).map((createdAt) => {
  //     return {
  //       createdAt,
  //       messages: groups[createdAt],
  //     };
  //   });
  // }

  return (
    <Wrapper>
      <MessageHeader />
      {/* {messagesByDates?.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <DateSeperator
              date={element.createdAt.split(",").slice(0, 2).join(", ")}
            />
            <b.Box className="section_content">
              {element.messages.map((message, index) => {
                return (
                  <div key={index}>
                    <Card
                      variant="message"
                      id={message.id}
                      sender={message.fullname}
                      avatar={message.avatarBackground}
                      time={message.createdAt}
                      body={{ type: "message", message: message.body }}
                    />
                  </div>
                );
              })}
            </b.Box>
          </React.Fragment>
        );
      })} */}
    </Wrapper>
  );
};
