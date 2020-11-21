import * as React from 'react';
import { Link } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

import {
  Nav,
  NavItem,
  Dropdown,
  LinkWrapper,
} from 'styles/Header/Landing/Navigation';
import { Button } from 'components/atoms/button/button.component';

interface Props {
  hovered: HoveredProps;
  onHovered: (hovered: HoveredProps) => void;
}

interface HoveredProps {
  why: boolean;
  solutions: boolean;
  resources: boolean;
  enterprise: boolean;
  pricing: boolean;
}

export const Navigation: React.FC<Props> = ({ hovered, onHovered }) => {
  const dropdowns = [
    {
      type: 'Why Slack?',
      items: [
        { name: 'Features', url: '/' },
        { name: 'How it replaces email', url: '/' },
        { name: 'Security', url: '/' },
        { name: 'Customers', url: '/' },
      ],
    },
    {
      type: 'Solutions',
      items: [
        { name: 'Remote Work', url: '/' },
        { name: 'Distance Learning', url: '/' },
        { name: 'Engineering', url: '/' },
        { name: 'Financial Services', url: '/' },
        { name: 'Sales', url: '/' },
        { name: 'IT', url: '/' },
        { name: 'Marketing', url: '/' },
        { name: 'Customer Support', url: '/' },
        { name: 'Human Resources', url: '/' },
        { name: 'Project Management', url: '/' },
        { name: 'Media', url: '/' },
      ],
    },
    {
      type: 'Resources',
      items: [
        { name: 'Resources Library', url: '/' },
        { name: 'Slack Tips', url: '/' },
        { name: 'Blog', url: '/' },
        { name: 'Webinars', url: '/' },
        { name: 'Slack Certified Program', url: '/' },
        { name: 'Help Center', url: '/' },
        { name: 'API', url: '/' },
        { name: 'App Directory', url: '/' },
        { name: 'Download', url: '/' },
      ],
    },
  ];

  return (
    <Nav>
      <div style={{ marginRight: 20 }}>
        <Button type='nav' nav='why' />
      </div>
      <div style={{ marginRight: 20 }}>
        <Button type='nav' nav='solutions' />
      </div>
      <div style={{ marginRight: 20 }}>
        <Button type='nav' nav='solutions' />
      </div>
    </Nav>
  );
};
