import React from 'react';
import * as b from 'global/blocks';

import {
  Wrapper,
  ImageWrapper,
  Images,
  Image,
  Title,
  Description,
} from 'components/Workspace/Content/DragDrop/index.styles';

export const DragDrop = () => {
  return (
    <Wrapper>
      <b.Flex>
        <ImageWrapper>
          <b.Flex justifyContent='center' alignItems='center'>
            <Images>
              <Image className='third' />
              <Image className='second' />
              <Image className='first' />
            </Images>
          </b.Flex>
        </ImageWrapper>
        <Title>
          <b.Text>Upload to コーディングスクール（仮）</b.Text>
        </Title>
        <Description>
          <b.Text>Hold Shift to share immediately o #general</b.Text>
        </Description>
      </b.Flex>
    </Wrapper>
  );
};
