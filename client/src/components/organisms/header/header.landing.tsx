import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * Context
 */
import { useToggleDispatch } from 'context/toggle-context';

/**
 * Global
 */
import * as b from 'global/blocks';
import { size } from 'global/sizes';

/**
 * Props
 */
import { LandingHeaderProps } from './props';

/**
 * Assets
 */
import { NameLogo } from 'assets/svg/Logo';

/**
 * Components
 */
import { Button } from 'components/atoms/button/button.component';
import { Modal } from '../modal/modal.component';

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
              <b.Box mr={3}>
                <NameLogo width={110} />
              </b.Box>
              <Options>
                <div>
                  <Button type='nav' nav='why' />
                </div>
                <div>
                  <Button type='nav' nav='solutions' />
                </div>
                <div>
                  <Button type='nav' nav='resources' />
                </div>
              </Options>
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
            <>
              <Normal>
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
              </Normal>
              <Mobile>
                <Button
                  type='hamburger'
                  onPress={() => dispatchToggle({ type: 'toggle_landing' })}
                />
              </Mobile>
            </>
          )}
        </b.Flex>
      </Wrapper>
      {pressed && data?.myTeams.teams ? (
        <LaunchWrapper>
          <Modal type='launch' teams={data?.myTeams.teams} />
        </LaunchWrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled(b.Box)`
  background-color: white;
`;

const Normal = styled.div`
  display: none;
  @media ${size.sm} {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media ${size.sm} {
    display: none;
  }
`;

export const LaunchWrapper = styled(b.Box)`
  display: none;

  @media ${size.md} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

const Options = styled(b.Flex)`
  display: none;
  @media ${size.sm} {
    display: flex;
  }
`;
