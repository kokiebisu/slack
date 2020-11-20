import * as React from 'react';
import styled from 'styled-components';

import * as b from 'global/blocks';
import { NavButtonProps } from './props';

export const NavButton: React.FC<NavButtonProps> = () => {
  return (
    <NavItem>
      <b.Text>Enterprise</b.Text>
    </NavItem>
  );
};

export const NavItem = styled(b.Box)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  font-family: 'CircularPro-Book';
  &:hover {
    cursor: pointer;
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & > a {
    text-decoration: none;
  }
`;
