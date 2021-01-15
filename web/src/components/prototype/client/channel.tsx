import { Info, Star } from "assets/svg";
import { Button } from "components/atoms/button";
import { Layout } from "components/layout";
import { TextEditor } from "components/organisms/texteditor";
import * as b from "global/blocks";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export const ChannelClient: React.FC<{}> = () => {
  return (
    <Layout
      variant="content"
      header={<Header channel="channel" />}
      content={<Content />}
    />
  );
};

const Header: React.FC<{ channel?: string }> = ({ channel }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={3} width={1}>
      <b.Flex justifyContent="space-between" alignItems="center">
        <b.Box>
          <b.Box>
            <b.Flex alignItems="center">
              <b.Box mr={1}>
                <b.Text fontSize={15} fontFamily="SlackLato-Black">
                  # {channel}
                </b.Text>
              </b.Box>
              <b.Box>
                <Star width={12} height={12} fill={theme.colors.gray__darker} />
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={13}
              fontFamily="SlackLato-Regular"
              color={theme.colors.gray__light}
            >
              Add a topic
            </b.Text>
          </b.Box>
        </b.Box>
        <b.Box>
          <b.Flex alignItems="center">
            <b.Box>
              <b.Flex alignItems="center">
                <b.Box mr={2}>
                  <Button variant="avatar" width={24} />
                </b.Box>
                <b.Box>
                  <b.Text fontFamily="SlackLato-Bold" fontSize={12}>
                    1
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
            <b.Box mx={3}>
              <Button variant="add" />
            </b.Box>
            <b.Box>
              <Info width={18} height={18} fill={theme.colors.gray} />
            </b.Box>
          </b.Flex>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const Content = () => {
  return (
    <b.Grid gridTemplateRows="1fr auto" width={1} height="100%">
      <b.Box bg="red" overflowY="scroll"></b.Box>
      <b.Box
        width="calc(100vw - 260px)"
        position="relative"
        height="auto"
        bottom={0}
        px={20}
      >
        <TextEditor channel="general" />
      </b.Box>
    </b.Grid>
  );
};
