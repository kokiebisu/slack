import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';
import { Wrapper, IconWrapper, Title, SubTitle } from './index.styles';

// Styles

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactChild;
}

export const ColumnCard: React.FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <Wrapper>
      <b.Box>
        <IconWrapper>{icon}</IconWrapper>
        <Title my={3}>
          <b.Text>{title}</b.Text>
        </Title>
        <SubTitle>
          <b.Text>{subtitle}</b.Text>
        </SubTitle>
      </b.Box>
    </Wrapper>
  );
};