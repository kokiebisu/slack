import * as React from 'react';
import { Link } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

// Styles
import { Wrapper } from 'styles/Footer/Option';

interface Props {
  name: string;
  url: string;
}

export const Option: React.FC<Props> = ({ name, url }) => {
  return (
    <Wrapper mr={3}>
      <Link to={url}>
        <b.Text>{name}</b.Text>
      </Link>
    </Wrapper>
  );
};
