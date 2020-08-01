import * as React from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';

// Blocks
import * as b from 'global/blocks';

import { size } from 'global/sizes';

// Svgs
import { Sidebar } from 'assets/svg';

import { useDropzone } from 'react-dropzone';
import { DragDrop } from 'components/Workspace/Content/DragDrop';

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
      <Wrapper>
        {/* <DragDrop /> */}
        {isDragActive && (
          <>
            {' '}
            <input {...getInputProps()} />
            <DragDrop />
          </>
        )}
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
        <b.Box className='bottom'>{content}</b.Box>
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled(b.Box)`
  height: 100%;
  display: grid;
  grid-template-rows: 65px auto;

  & > div {
    &.top {
      height: 65px;
      padding: 15px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
    }

    &.bottom {
      height: 100%;
    }
  }
`;

export const Top = styled(b.Box)`
  padding: 0 19px;
  height: auto;

  & div {
    &.top__left {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
    }

    &.top__right {
      width: 100px;
    }
  }
`;

export const Bottom = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

export const IconWrapper = styled(b.Box)`
  &.sidebar {
    width: 35px;
    height: 35px;
    & svg {
      position: relative;
      top: 2.5px;
      left: 4.5px;
      width: 25px;
      height: 25px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }

    @media ${size['7xs']} {
      display: none;
    }

    &:hover {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 17px;
    font-family: 'SlackLato-Bold';
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const NewMessage = styled(b.Button)`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.black__light};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

export const Section = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'SlackLato-Black';
    font-size: 15px;
  }
`;

export const SubSection = styled(b.Text)`
  margin: 4px 0;
  & > p {
    font-size: 13px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray};
  }
`;
