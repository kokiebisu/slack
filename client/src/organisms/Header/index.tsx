import React from 'react';
import { Box, Button, Icon, Text } from 'atoms';
import { css } from 'styled-components';
import { launch, signin, menu } from 'atoms/stories/button.stories';
import { navItem } from 'atoms/stories/text.stories';
import { size } from 'global';

export const landingHeaderStyles = {
  wrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  left: css`
    display: flex;
    align-items: center;
    & > div:first-child {
      margin-right: 10px;
    }
  `,
  itemwrapper: css`
    margin: 0 10px;
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  right: css`
    display: flex;
    align-items: center;
  `,
  signupwrapper: css`
    margin-right: 25px;
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  launchwrapper: css`
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  `,
  iconwrapper: css`
    display: block;
    @media (min-width: 500px) {
      display: none;
    }
  `,
};

interface Props {
  extend: {
    wrapper: any;
    left: any;
    itemwrapper: any;
    right: any;
    signupwrapper: any;
    launchwrapper: any;
    iconwrapper: any;
  };
}

export const Header: React.FC<Props> = ({ extend }) => {
  const items = [
    'Why Slack?',
    'Solutions',
    'Resources',
    'Enterprise',
    'Pricing',
  ];
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.left}>
        <Icon label='NameLogo' width={120} />
        {items.map((item) => {
          return (
            <Box styles={extend.itemwrapper}>
              <Text {...navItem.args} children={item} />
            </Box>
          );
        })}
      </Box>
      <Box styles={extend.right}>
        <Box styles={extend.signupwrapper}>
          <Button {...signin.args} onPress={() => console.log('clicked')} />
        </Box>
        <Box styles={extend.launchwrapper}>
          <Button {...launch.args} onPress={() => console.log('clicked')} />
        </Box>
        <Box styles={extend.iconwrapper}>
          <Button {...menu.args} onPress={() => console.log('clicked')} />
        </Box>
      </Box>
    </Box>
  );
};
