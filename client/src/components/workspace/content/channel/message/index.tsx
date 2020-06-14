import * as React from 'react';
import * as b from '../../../../../styles/blocks';
import { Wrapper } from './message.styles';

interface Props {
  name: string;
  time: string;
  body: string;
}

export const Message: React.FC<Props> = ({ name, time, body }) => {
  return <Wrapper>message</Wrapper>;
};
