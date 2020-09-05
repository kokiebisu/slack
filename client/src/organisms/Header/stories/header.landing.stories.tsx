import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Text } from 'atoms';
import { Header } from 'organisms/Header';
import { landingHeaderStyles } from 'organisms/Header/styles/header.landing.styles';
export default {
  title: 'Design System/Organisms/Header',
  component: Header,
} as Meta;

interface Props {
  styles: any;
}

const HeaderTemplate: Story<Props> = ({ ...args }) => <Header {...args} />;

export const landingHeader = HeaderTemplate.bind({});
landingHeader.args = {
  styles: landingHeaderStyles,
};
