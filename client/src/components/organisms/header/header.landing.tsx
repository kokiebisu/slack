import React, { useState } from 'react';
import { LandingHeaderProps } from './props';

import * as b from 'global/blocks';

import { NameLogo } from 'assets/svg/Logo';
import { Button } from 'components/atoms/button/button.component';
import { useToggleDispatch } from 'context/toggle-context';
import styled from 'styled-components';
import { LaunchOptions } from 'components/Header/Landing/LaunchOptions';

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  data,
  loading,
}) => {
  const [pressed, setPressed] = useState(false);
  const dispatchToggle = useToggleDispatch();
  return (
    <>
      <Wrapper py={3}>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box width={1}>
            <b.Flex alignItems='center'>
              <div>
                <NameLogo width={110} />
              </div>
              <b.Flex>
                <div>
                  <Button type='nav' nav='why' />
                </div>
                <div>
                  <Button type='nav' nav='solutions' />
                </div>
                <div>
                  <Button type='nav' nav='resources' />
                </div>
              </b.Flex>
            </b.Flex>
          </b.Box>
          {!loading &&
          data &&
          data.myTeams.teams! &&
          data.myTeams.teams!.length > 0 ? (
            <div>
              <Button
                type='primary'
                size='sm'
                title='Launch'
                onPress={() => setPressed(!pressed)}
              />
            </div>
          ) : (
            <b.Flex alignItems='center'>
              <b.Box mr={3}>
                <Button type='transparent' title='Sign in' to='/signin' />
              </b.Box>
              <div>
                <Button
                  type='primary'
                  size='sm'
                  title='Get started'
                  to='/get-started'
                />
              </div>
            </b.Flex>
          )}
          <Button
            type='hamburger'
            onPress={() => dispatchToggle({ type: 'toggle_landing' })}
          />
        </b.Flex>
      </Wrapper>
      {pressed && data?.myTeams.teams ? (
        <LaunchOptions teams={data?.myTeams.teams} />
      ) : null}
    </>
  );
};

const Wrapper = styled(b.Box)`
  background-color: white;
`;
