import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../../styles/blocks';
import { HeaderLogo } from '../../../assets/svg/Logo';

import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

import { HashTag } from '../../../assets/svg/HashTag';

// Sizes
import { size } from '../../../styles/sizes';

interface Props {
  title: string;
  requirePolicy?: boolean;
  opacity: number;
  name: string;
  sendInput: (input: string, name: string) => void;
}

const MockHashTag = () => {
  return <HashTag width={8} height={8} color='#caadcd' />;
};

export const CreateTeamLayout: React.FC<Props> = ({
  title,
  requirePolicy,
  opacity,
  name,
  sendInput,
}) => {
  const [input, setInput] = useState('');
  const history = useHistory();

  return (
    <Wrapper>
      <b.Flex>
        <Left>
          <b.Flex>
            <LeftWrapper>
              <b.Box mt={5}>
                <b.Text
                  fontFamily='SlackLato-Black'
                  fontSize={26}
                  color='#1D1C1D'>
                  {title}
                </b.Text>
              </b.Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendInput(input, name);
                }}>
                <b.Box mt={4} mb={3} width={1}>
                  <Input
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                    placeholder='Ex. Acme or Acme Marketing'
                  />
                </b.Box>
                <b.Box width={1}>
                  <NextButton name={name} type='submit'>
                    <b.Text>Next</b.Text>
                  </NextButton>
                </b.Box>
              </form>
              {requirePolicy ? (
                <Policy my={4}>
                  <b.Text fontSize={12} fontFamily='SlackLato-Light'>
                    By continuing, you're agreeing to our{' '}
                    <span>Customer Terms of Service</span>,{' '}
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                  </b.Text>
                </Policy>
              ) : null}
            </LeftWrapper>
          </b.Flex>
        </Left>
        <Right pl={5}>
          <b.Flex alignItems='center'>
            <RightWrapper>
              <b.Box opacity={opacity}>
                <LeftMock>
                  <b.Box>
                    <b.Box>
                      <SkeletonLine width={90} />
                    </b.Box>
                    <b.Box mt={4}>
                      <SkeletonLine width={60} />
                    </b.Box>
                    <b.Box mt={2}>
                      <b.Flex alignItems='center'>
                        <b.Box mr={1}>
                          <MockHashTag />
                        </b.Box>
                        <SkeletonLine width={80} top={2} />
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex alignItems='center'>
                        <b.Box mr={1}>
                          <MockHashTag />
                        </b.Box>
                        <SkeletonLine width={80} top={2} />
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex alignItems='center'>
                        <b.Box mr={1}>
                          <MockHashTag />
                        </b.Box>
                        <SkeletonLine width={80} top={2} />
                      </b.Flex>
                    </b.Box>
                    <b.Box mt={4}>
                      <b.Box>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <BulletPoint />
                          </b.Box>
                          <SkeletonLine width={80} />
                        </b.Flex>
                      </b.Box>
                    </b.Box>
                    <BulletSection>
                      <b.Box>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <BulletPoint />
                          </b.Box>
                          <SkeletonLine width={80} />
                        </b.Flex>
                      </b.Box>
                    </BulletSection>
                    <BulletSection>
                      <b.Box>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <BulletPoint />
                          </b.Box>
                          <SkeletonLine width={80} />
                        </b.Flex>
                      </b.Box>
                    </BulletSection>
                  </b.Box>
                </LeftMock>
                <RightMock>
                  <b.Box>
                    <SkeletonLine width={70} />
                    <b.Box mt={3}>
                      <Line />
                    </b.Box>
                  </b.Box>
                </RightMock>
              </b.Box>
            </RightWrapper>
          </b.Flex>
        </Right>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 100%;
  height: 100%;
`;

const Left = styled(b.Box)`
  width: 100%;

  @media ${size.md} {
    display: block;
    width: 50%;
    padding-right: 58px;
  }

  & > div {
    justify-content: center;
    align-items: center;

    @media ${size.md} {
      justify-content: flex-end;
    }
  }
`;

const Right = styled(b.Box)`
  display: none;
  background-color: #f8f8f8;

  @media ${size.md} {
    display: block;
    width: 50%;
  }
`;

const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

const RightWrapper = styled(b.Box)`
  width: 350px;
  height: 325px;

  & > div {
    height: 100%;
    display: grid;
    grid-template-columns: 125px auto;
    opacity: ${({ opacity }) => `${opacity}`};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

const LeftMock = styled(b.Box)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #573a5a;
  padding: 18px 15px;

  & > div {
    height: 100%;
  }
`;

const SkeletonLine = styled(b.Box)`
  position: relative;
  background-color: #caadcd;
  height: 7px;
  border-radius: 5px;
  width: ${({ width }) => `${width}%`};

  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}px;
    `}
`;

const Line = styled(b.Box)`
  height: 2px;
  width: 100%;
  border-radius: 9999px;
  background-color: #4e4e4e;
`;

const BulletSection = styled(b.Box)`
  margin-top: 12px;
`;

const BulletPoint = styled(b.Box)`
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: #caadcd;
`;

const RightMock = styled(b.Box)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;
  padding: 18px 15px;

  & > div {
    height: 100%;
  }
`;

const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid #868686;
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: #4a144b;
  border-radius: 4px;
  color: white;
  font-family: 'SlackLato-Bold';
  font-size: 18px;

  &:hover {
    background-color: #5c2c5d;
  }
`;

const Policy = styled(b.Box)`
  span {
    color: #3a71a9;
  }
`;
