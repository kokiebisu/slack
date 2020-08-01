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
      <NavItem
        onHoverStart={() => {
          onHovered({ ...hovered, why: true });
        }}
        onHoverEnd={() => {
          onHovered({ ...hovered, why: false });
        }}>
        <b.Text>{dropdowns[0].type}</b.Text>
        {!hovered.solutions && hovered.why ? (
          <Dropdown>
            {dropdowns[0].items.map((dropdown, index) => {
              return (
                <LinkWrapper key={index}>
                  <Link to={dropdown.url}>
                    <b.Text>{dropdown.name}</b.Text>
                  </Link>
                </LinkWrapper>
              );
            })}
          </Dropdown>
        ) : null}
      </NavItem>
      <NavItem
        onHoverStart={() => {
          onHovered({ ...hovered, solutions: true });
        }}
        onHoverEnd={() => {
          onHovered({ ...hovered, solutions: false });
        }}>
        <b.Text>{dropdowns[1].type}</b.Text>
        {!hovered.resources && hovered.solutions ? (
          <Dropdown>
            {dropdowns[1].items.map((dropdown, index) => {
              return (
                <LinkWrapper key={index}>
                  <Link to={dropdown.url}>
                    <b.Text>{dropdown.name}</b.Text>
                  </Link>
                </LinkWrapper>
              );
            })}
          </Dropdown>
        ) : null}
      </NavItem>
      <NavItem
        onHoverStart={() => onHovered({ ...hovered, resources: true })}
        onHoverEnd={() => onHovered({ ...hovered, resources: false })}>
        <b.Text>{dropdowns[2].type}</b.Text>
        {!hovered.why && hovered.resources ? (
          <Dropdown>
            {dropdowns[2].items.map((dropdown, index) => {
              return (
                <LinkWrapper key={index}>
                  <Link to={dropdown.url}>
                    <b.Text>{dropdown.name}</b.Text>
                  </Link>
                </LinkWrapper>
              );
            })}
          </Dropdown>
        ) : null}
      </NavItem>
      <NavItem>
        <Link to='/'>
          <b.Text>Enterprise</b.Text>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/'>
          <b.Text>Pricing</b.Text>
        </Link>
      </NavItem>
    </Nav>
  );
};
