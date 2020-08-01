import * as React from 'react';
import { Link } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  IconWrapper,
} from 'components/CreateTeam/Header/index.styles';

// Svgs
import { NameLogo } from 'assets/svg/Logo';

export const Header = () => {
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
