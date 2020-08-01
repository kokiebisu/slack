import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const TextInput = styled.input`
  font-size: 56px;
  width: 80px;
  padding: 15px 0 15px 37px;
  border: 0.5px solid gray;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &.added {
    padding: 15px 0 15px 23px;
  }

  &.input_1 {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_2 {
    border-top: 0.5px solid gray;
    border-left: none;

    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_3 {
    border-top: 0.5px solid gray;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.input_4 {
    border-top: 0.5px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_5 {
    border-top: 0.5px solid gray;
    border-left: none;
    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_6 {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.black__light};
    font-family: 'Larsseit-Bold';
    text-align: center;
  }
`;

export const Description = styled(b.Box)`
  & > p {
    line-height: 1.5;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    font-family: 'SlackLato-Regular';
    font-size: 20px;
  }
`;

export const CheckNotice = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Thin';
    font-size: 13px;
  }
`;
