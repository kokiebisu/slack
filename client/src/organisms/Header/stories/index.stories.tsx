import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Text } from 'atoms';
import styled from 'styled-components';
import { Header } from 'organisms/Header';

export default {
  title: 'Design System/Organisms/Header',
  component: Box,
} as Meta;

interface Props {}

const HeaderTemplate: Story<Props> = ({ ...args }) => <Header {...args} />;

export const base = HeaderTemplate.bind({});
base.args = {};
