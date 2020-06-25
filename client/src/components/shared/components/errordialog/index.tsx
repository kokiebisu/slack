import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { ErrorBox, IconWrapper } from './index.styles';

// Svgs
import { Warning } from '../../../../assets/svg';

interface Props {
  error: string;
  width: number | string;
}

export const ErrorDialog: React.FC<Props> = ({ error, width }) => {
  return (
    <b.Box height={35} mb={3} mt={2}>
      <b.Flex justifyContent='center'>
        {error && (
          <ErrorBox width={width} backgroundColor='pink__lighter'>
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
