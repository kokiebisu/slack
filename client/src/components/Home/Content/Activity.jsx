import React from 'react';
import styled from 'styled-components';

import Thumbsup from '../../../assets/img/thumbsup.png';

import { Reactions } from '../../shared/Reactions';

import * as b from '../../../styles/blocks';

export const Activity = () => {
  return (
    <ActivityWrapper p={3}>
      <b.Box>
        <b.Text fontSize={14} fontFamily='OpenSans-SemiBold'>
          Thomas Bui - Set E reacted to your message
        </b.Text>
      </b.Box>
      <b.Box mt={2}>
        <ActivityContent>
          <b.Box>
            <img width={30} height={30} src={Thumbsup} />
          </b.Box>
          <b.Box>
            <b.Box>
              <b.Flex alignItems='center'>
                <UserWrapper mr={2}>
                  <b.Text
                    color='#1D1C1D'
                    fontFamily='OpenSans-Bold'
                    letterSpacing='-0.025em'>
                    ken
                  </b.Text>
                </UserWrapper>
                <b.Box>
                  <b.Text color='#616061' fontFamily='Segoe' fontSize={13}>
                    Yesterday at 2:44 PM
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
            <b.Box mt={2}>
              <b.Text color='#616061' fontFamily='Segoe' fontSize={13}>
                Too
              </b.Text>
            </b.Box>
            <b.Box mt={1}>
              <Reactions />
            </b.Box>
          </b.Box>
        </ActivityContent>
      </b.Box>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled(b.Box)`
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 25px;
`;

const ActivityContent = styled(b.Box)`
  display: grid;
  grid-template-columns: 35px auto;
`;

const UserWrapper = styled(b.Box)`
  position: relative;
  bottom: 3px;
`;
