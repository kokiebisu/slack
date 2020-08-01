import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Svgs
import { NoNameLogo } from 'assets/svg/Logo';

// Styles
import { Wrapper, Logo, Content, IconWrapper, Copyright } from 'styles/Footer';

// Components
import { Options } from 'components/Footer/Options';
import { SocialMedias } from 'components/Footer/SocialMedias';
import { Sections } from 'components/Footer/Sections';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <b.Box className='footer__logo'>
        <b.Container>
          <Content className='logo'>
            <b.Flex>
              <Logo>
                <IconWrapper className='nonamelogo'>
                  <NoNameLogo />
                </IconWrapper>
              </Logo>
              <Sections />
            </b.Flex>
          </Content>
        </b.Container>
      </b.Box>
      <b.Box className='footer__options'>
        <Content className='options' py={4}>
          <b.Container>
            <b.Flex>
              <Options />
              <SocialMedias />
            </b.Flex>
          </b.Container>
        </Content>
      </b.Box>
      <b.Box className='footer__copyright'>
        <b.Container>
          <Copyright>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </Copyright>
        </b.Container>
      </b.Box>
    </Wrapper>
  );
};
