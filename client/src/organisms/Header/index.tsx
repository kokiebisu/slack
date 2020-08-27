import React from 'react';
import { Box, Button, Icon, Text } from 'atoms';
import styled from 'styled-components';
import { launch } from 'atoms/stories/button.stories';

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled(Box)`
  display: flex;
  align-items: center;
  & > div:first-child {
    margin-right: 10px;
  }
  & > div:not(:first-child) {
    padding: 15px 20px;
  }
`;

const Right = styled(Box)``;

export const Header = () => {
  const items = [
    'Why Slack?',
    'Solutions',
    'Resources',
    'Enterprise',
    'Pricing',
  ];
  return (
    <Wrapper>
      <Left>
        <Icon label='NameLogo' width={120} />
        {items.map((item) => {
          return (
            <Box>
              <Text>{item}</Text>
            </Box>
          );
        })}
      </Left>
      <Right>
        <Button {...launch.args} onPress={() => console.log('clicked')} />
      </Right>
    </Wrapper>
  );
};
