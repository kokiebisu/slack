import styled from 'styled-components';
import * as b from '../../../../styles/blocks';
import { Link } from 'react-router-dom';

// Breakpoints
import { size } from '../../../../styles/sizes';

export const Wrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: row;
  @media ${size.xs} {
    width: 50%;
  }

  & > div {
    width: 50%;
  }
`;

export const SectionName = styled(b.Box)`
  & > p {
    color: #464646;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'CircularPro-Bold';
  }
`;

export const Items = styled.ul`
  color: #696969;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  color: #868686;
  font-family: 'SlackLato-Regular';
  padding: 10px 0;
  font-size: 14px;
`;

export const ItemLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  &:hover {
    color: #1264a3;
  }
`;
