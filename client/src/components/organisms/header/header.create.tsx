import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Global
 */
import * as b from 'global/blocks';

/**
 * Props
 */
import { CreateHeaderProps } from './props';

/**
 * Assets
 */
import { NameLogo } from 'assets/svg';

export const CreateHeader: React.FC<CreateHeaderProps> = () => {
  return (
    <Wrapper>
      <b.Box>
        <b.Container>
          <b.Flex alignItems='center' justifyContent='center'>
            <Link to='/'>
              <IconWrapper mr={4} className='namelogo'>
                <NameLogo />
              </IconWrapper>
            </Link>
          </b.Flex>
        </b.Container>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;

  & > div {
    background-color: ${({ theme }) => theme.colors.white};
    height: 70px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__light};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  top: 2px;

  &.namelogo {
    svg {
      width: 100px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;
