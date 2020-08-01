import styled from 'styled-components';
import * as b from 'styles/blocks';
import { size } from 'styles/sizes';

export const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${size.md} {
    display: flex;
  }
`;

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

export const Dropdown = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 45px;
  padding: 13px 20px;
  border-radius: 5px;
`;

export const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & > a {
    text-decoration: none;
  }

  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

// export const Link = styled(b.Anchor)`
//   text-transform: none;
//   color: ${({ theme }) => theme.colors.gray};
// `;
