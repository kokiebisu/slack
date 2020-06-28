import * as React from 'react';
import { useCallback } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Wrapper, Top, Section, IconWrapper } from './index.styles';

// Svgs
import { Sidebar } from '../../../../assets/svg';

import { useDropzone } from 'react-dropzone';
import { DragDrop } from '../dragdrop';

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
  const onDrop = useCallback((acceptedFiles) => {
    console.log('accepted', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <Wrapper>
        <b.Box className='top'>
          <Top>
            <b.Flex justifyContent='space-between' alignItems='center'>
              <b.Box className='top__left'>
                <b.Flex alignItems='center'>
                  <IconWrapper className='sidebar' mr={3}>
                    <b.Flex alignItems='center'>
                      <Sidebar />
                    </b.Flex>
                  </IconWrapper>
                  <b.Box>
                    <Section>
                      <b.Text>{section}</b.Text>
                    </Section>
                    {subsection && <b.Box>{subsection}</b.Box>}
                  </b.Box>
                </b.Flex>
              </b.Box>
              <b.Box className='top__right'>{options}</b.Box>
            </b.Flex>
          </Top>
        </b.Box>
        {isDragActive ? (
          <DragDrop />
        ) : (
          <b.Box className='bottom'>{content}</b.Box>
        )}
      </Wrapper>
    </div>
  );
};
