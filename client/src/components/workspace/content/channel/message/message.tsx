import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../../../styles/blocks';

interface Props {
  text: string;
}

export const MessageBody: React.FC<Props> = ({ text }) => {
  return <b.Box dangerouslySetInnerHTML={{ __html: text }} />;
};
