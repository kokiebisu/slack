import * as React from 'react';
import {
  Wrapper,
  Top,
  Section,
  SubSection,
  IconWrapper,
  Bottom,
} from './index.styles';

import * as b from '../../../../styles/blocks';

interface Props {
  section: string;
  subsection?: React.ReactNode;
  options?: React.ReactNode;
  content: React.ReactNode;
}

export const ClientContentLayout: React.FC<Props> = ({
  section,
  subsection,
  options,
  content,
}) => {
  return (
    <Wrapper>
      <b.Box className='top'>
        <Top>
          <b.Flex justifyContent='space-between' alignItems='center'>
            <b.Box>
              <Section>
                <b.Text>{section}</b.Text>
              </Section>
              {subsection && <b.Box>{subsection}</b.Box>}
            </b.Box>
            <b.Box>{options}</b.Box>
          </b.Flex>
        </Top>
      </b.Box>
      <b.Box className='bottom'>{content}</b.Box>
    </Wrapper>
  );
};
