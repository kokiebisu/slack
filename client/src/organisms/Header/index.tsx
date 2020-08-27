import React from 'react';
import { Box, Button, Icon, Text } from 'atoms';
import styled from 'styled-components';
import { launch, signin } from 'atoms/stories/button.stories';
import { navItem } from 'atoms/stories/text.stories';

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

const Right = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled(Box)`
  margin-right: 25px;
`;

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
          return <Text {...navItem.args} children={item} />;
        })}
      </Left>
      <Right>
        <TextWrapper>
          <Text {...signin.args} />
        </TextWrapper>
        <Button {...launch.args} onPress={() => console.log('clicked')} />
      </Right>
    </Wrapper>
  );
};
