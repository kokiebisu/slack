import { Info, Star } from "assets/svg";
import { Button } from "components/atoms/button";
import { Layout } from "components/layout";
import * as b from "global/blocks";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export const ChannelClient: React.FC<{}> = () => {
  return <Layout variant="content" header={<Header />} content={<Content />} />;
};

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={3} width={1}>
      <b.Flex justifyContent="space-between" alignItems="center">
        <b.Box>
          <b.Box>
            <b.Flex alignItems="center">
              <b.Box mr={1}>
                <b.Text fontSize={15} fontFamily="SlackLato-Black">
                  # randsfa
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
              <Button variant="avatar" />
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
  return <div>channel content</div>;
};
