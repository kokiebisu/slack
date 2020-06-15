import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

import { Nav, NavItem, Dropdown, LinkWrapper, Link } from './index.styles';

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
  return (
    <Nav>
      <NavItem
        onHoverStart={() => {
          onHovered({ ...hovered, why: true });
        }}
        onHoverEnd={() => {
          onHovered({ ...hovered, why: false });
        }}>
        <b.Text>Why Slack?</b.Text>
        {!hovered.solutions && hovered.why ? (
          <Dropdown>
            <LinkWrapper>
              <Link>Features</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>How it replaces email</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Security</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Customers</Link>
            </LinkWrapper>
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
        <b.Text>Solutions</b.Text>
        {!hovered.resources && hovered.solutions ? (
          <Dropdown>
            <LinkWrapper>
              <Link>Remote Work</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Distance Learning</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Engineering</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Financial Services</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Sales</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>IT</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Marketing</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Customer Support</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Human Resources</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Project Management</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Media</Link>
            </LinkWrapper>
          </Dropdown>
        ) : null}
      </NavItem>
      <NavItem
        onHoverStart={() => onHovered({ ...hovered, resources: true })}
        onHoverEnd={() => onHovered({ ...hovered, resources: false })}>
        <b.Text>Resources</b.Text>
        {!hovered.why && hovered.resources ? (
          <Dropdown>
            <LinkWrapper>
              <Link>Resources Library</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Slack Tips</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Blog</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Webinars</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Slack Certified Program</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Help Center</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>API</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>App Directory</Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link>Download</Link>
            </LinkWrapper>
          </Dropdown>
        ) : null}
      </NavItem>
      <NavItem>
        <Link>Enterprise</Link>
      </NavItem>
      <NavItem>
        <Link>Pricing</Link>
      </NavItem>
    </Nav>
  );
};
