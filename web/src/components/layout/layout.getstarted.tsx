import React, { useContext } from "react";
import * as b from "global/blocks";
// Svg
import { NameLogo } from "assets/svg";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import { Footer } from "components/organisms/footer/footer.component";

export const GetStartedLayout: React.FC<{
  children?: any;
  title?: string;
  subtitle?: string;
}> = ({ children, title, subtitle }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Grid height="100%" gridTemplateRows="auto 1fr 100px">
      <b.Container>
        <b.Box mt={3}>
          <b.Flex justifyContent="center">
            <b.Box py={2}>
              <NameLogo
                width={140}
                height={60}
                fill={[
                  theme.colors.blue__lighter,
                  theme.colors.green__lighter,
                  theme.colors.yellow,
                  theme.colors.red,
                ]}
              />
            </b.Box>
          </b.Flex>
          {title && (
            <b.Box>
              <b.Text
                fontSize={48}
                color="black__light"
                fontFamily="Larsseit-Bold"
                textAlign="center"
              >
                {title}
              </b.Text>
            </b.Box>
          )}
          {subtitle && (
            <b.Box pt={2} pb={4}>
              <b.Text
                lineHeight={1.5}
                textAlign="center"
                color="gray"
                fontFamily="SlackLato-Regular"
                fontSize={20}
              >
                {subtitle}
              </b.Text>
            </b.Box>
          )}
        </b.Box>
      </b.Container>
      <b.Box width={1}>
        <b.Flex justifyContent="center">{children}</b.Flex>
      </b.Box>
      <b.Box py={4}>
        <Footer variant="getstarted" />
      </b.Box>
    </b.Grid>
  );
};
