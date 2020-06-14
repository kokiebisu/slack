import * as React from 'react';
import * as b from '../../../styles/blocks';
import { ErrorBox, IconWrapper } from './errordialog.styles';
import { Warning } from '../../../assets/svg';

interface Props {
  error: string;
}

export const ErrorDialog: React.FC<Props> = ({ error }) => {
  return (
    <b.Box height={35} my={2}>
      <b.Flex justifyContent='center'>
        {error && (
          <ErrorBox backgroundColor='pink__lighter' width={1}>
            <b.Flex alignItems='center'>
              <IconWrapper className='warning' mr={2}>
                <Warning />
              </IconWrapper>
              <b.Box py={2}>
                <b.Text fontFamily='SlackLato-Regular' fontSize={14}>
                  {error}
                </b.Text>
              </b.Box>
            </b.Flex>
          </ErrorBox>
        )}
      </b.Flex>
    </b.Box>
  );
};