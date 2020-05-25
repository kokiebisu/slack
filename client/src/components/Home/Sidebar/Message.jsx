import React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

export const Message = () => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <b.Box pr={2}>
          <Status />
        </b.Box>
        <b.Box style={{ top: 3 }}>
          <b.Text fontFamily='SlackLato-Light' color='#CFC3CF' fontSize={15}>
            ken
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const Status = styled(b.Box)`
  width: 10px;
  height: 10px;
  background-color: #2bac76;
  border-radius: 100%;
`;
