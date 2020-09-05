import React from 'react';
import { Box, Button, Icon, Text } from 'atoms';
import { css } from 'styled-components';
import { launch, signin, menu } from 'atoms/stories/button.stories';
import { navItem } from 'atoms/stories/text.stories';
import { size } from 'global';

interface Props {
  styles: {
    wrapper: any;
    left: any;
    itemwrapper: any;
    right: any;
    signupwrapper: any;
    launchwrapper: any;
    iconwrapper: any;
  };
}

export const Header: React.FC<Props> = ({ styles }) => {
  const items = [
    'Why Slack?',
    'Solutions',
    'Resources',
    'Enterprise',
    'Pricing',
  ];
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.left}>
        <Icon label='NameLogo' width={120} />
        {items.map((item) => {
          return (
            <Box styles={styles.itemwrapper}>
              <Text {...navItem.args} children={item} />
            </Box>
          );
        })}
      </Box>
      <Box styles={styles.right}>
        <Box styles={styles.signupwrapper}>
          <Button {...signin.args} onPress={() => console.log('clicked')} />
        </Box>
        <Box styles={styles.launchwrapper}>
          <Button {...launch.args} onPress={() => console.log('clicked')} />
        </Box>
        <Box styles={styles.iconwrapper}>
          <Button {...menu.args} onPress={() => console.log('clicked')} />
        </Box>
      </Box>
    </Box>
  );
};
