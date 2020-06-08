import * as React from 'react';
import {
  Wrapper,
  Top,
  Section,
  SubSection,
  IconWrapper,
  Bottom,
} from './layout.styles';

import * as b from '../../../../styles/blocks';

interface Props {
  section: string;
  subsection?: string;
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
              {subsection && (
                <SubSection>
                  <b.Text>{subsection}</b.Text>
                </SubSection>
              )}
            </b.Box>
            <b.Box>{options}</b.Box>
          </b.Flex>
        </Top>
      </b.Box>
      <b.Box className='bottom'>{content}</b.Box>
    </Wrapper>
  );
};
