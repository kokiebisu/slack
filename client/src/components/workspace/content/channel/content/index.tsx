import * as React from 'react';
import * as b from '../../../../../styles/blocks';
import {
  Wrapper,
  Title,
  Description,
  Options,
  Option,
  IconWrapper,
  DateSeperator,
  Date,
} from './content.styles';
import { LayerPlus, UserPlus } from '../../../../../assets/svg';
import { BottomArrow } from '../../../../../assets/svg/Arrows';
import { Messages } from '../message/container';

export const Content = () => {
  return (
    <Wrapper>
      <b.Box className='section_header'>
        <Title mb={2}>
          <b.Text># general</b.Text>
        </Title>
        <Description>
          <b.Text>
            <b.Span className='creator'>@Chihiro Hasegawa</b.Span> created this
            channel on June 5th. This is the very beginning of the{' '}
            <b.Span className='channel_name'>#general</b.Span> channel.
            Description:
            このチャンネルはワークスペース全体のコミュニケーションと社内アナウンス用です。全メンバーがこのチャンネルに参加しています。
            (<b.Span className='edit_button'>edit</b.Span>)
          </b.Text>
        </Description>
        <Options>
          <b.Flex alignItems='center'>
            <Option mr={2}>
              <b.Flex alignItems='center'>
                <IconWrapper className='layer_plus' mr={2}>
                  <LayerPlus />
                </IconWrapper>
                <b.Box>
                  <b.Text>Add an app</b.Text>
                </b.Box>
              </b.Flex>
            </Option>
            <Option>
              <b.Flex alignItems='center'>
                <IconWrapper className='user_plus' mr={2}>
                  <UserPlus />
                </IconWrapper>
                <b.Box>
                  <b.Text>Add people</b.Text>
                </b.Box>
              </b.Flex>
            </Option>
          </b.Flex>
        </Options>
      </b.Box>
      <DateSeperator>
        <b.Flex alignItems='center'>
          <Date mr={2}>
            <b.Text>Friday, June 5th</b.Text>
          </Date>
          <IconWrapper className='bottom_arrow'>
            <BottomArrow />
          </IconWrapper>
        </b.Flex>
      </DateSeperator>
      <b.Box className='section_content'>
        <Messages />
      </b.Box>
    </Wrapper>
  );
};
