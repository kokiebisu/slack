import * as React from "react";
import * as b from "global/blocks";
// Svg
import { Globe, NameLogo } from "assets/svg";

import {
  Wrapper,
  IconWrapper,
  FooterLink,
  ChangeRegion,
} from "styles/GetStarted";

export const GetStarted: React.FC<{ content?: any }> = ({
  content = "Content",
}) => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box>
          <b.Flex justifyContent="center">
            <IconWrapper className="namelogo">
              <NameLogo />
            </IconWrapper>
          </b.Flex>
        </b.Box>
      </b.Container>
      {content}
      <b.Box py={4}>
        <b.Flex alignItems="center" justifyContent="center">
          <b.Box mr={2}>
            <FooterLink href="/legal">Privacy & terms</FooterLink>
          </b.Box>
          <b.Box mr={2}>
            <FooterLink href="/help">Contact us</FooterLink>
          </b.Box>
          <b.Box mr={2}>
            <b.Flex>
              <IconWrapper className="globe" mr={1}>
                <Globe />
              </IconWrapper>
              <b.Box>
                <ChangeRegion>Change region</ChangeRegion>
              </b.Box>
            </b.Flex>
          </b.Box>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};
