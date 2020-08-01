import * as React from 'react';
import { Dispatch, SetStateAction, FormEvent } from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  InnerWrapper,
  Left,
  Right,
  LeftWrapper,
  Input,
  NextButton,
  Policy,
} from 'components/CreateTeam/Layout/index.styles';

import { Header } from 'components/CreateTeam/Header';
import { MiniWorkspace } from 'components/CreateTeam/Miniworkspace';

interface Props {
  title: string;
  inputPlaceholder?: string;
  requirePolicy?: boolean;
  opacity: number;
  name?: string;
  description?: string;
  buttonName?: string;
  team?: string;
  channel?: string;
  authenticated?: boolean;
  transaction: (e: FormEvent<HTMLFormElement>) => void;
  input: string;
  modifyInput: Dispatch<SetStateAction<string>>;
}

export const CreateTeamLayout: React.FC<Props> = ({
  title,
  inputPlaceholder,
  team,
  channel,
  requirePolicy,
  opacity,
  name,
  description,
  buttonName,
  children,
  authenticated,
  transaction,
  input,
  modifyInput,
}) => {
  return (
    <Wrapper exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <Header />
      <InnerWrapper>
        <b.Flex>
          <Left>
            <b.Flex>
              <LeftWrapper>
                <b.Box>
                  <b.Text
                    fontFamily='SlackLato-Black'
                    fontSize={26}
                    color='black__light'>
                    {title}
                  </b.Text>
                </b.Box>
                <form onSubmit={transaction}>
                  {inputPlaceholder && (
                    <b.Box mt={4} mb={3} width={1}>
                      <Input
                        value={input}
                        onChange={(e) => {
                          modifyInput(e.target.value);
                        }}
                        placeholder={inputPlaceholder}
                      />
                    </b.Box>
                  )}
                  {description && (
                    <b.Box mt={4} mb={3} width={1}>
                      <b.Text lineHeight={1.7}>{description}</b.Text>
                    </b.Box>
                  )}
                  <b.Box width={1}>
                    <NextButton name={name} type='submit'>
                      <b.Text>{buttonName ? `${buttonName}` : `Next`}</b.Text>
                    </NextButton>
                  </b.Box>
                </form>
                {requirePolicy ? (
                  <Policy my={4}>
                    <b.Text fontSize={12} fontFamily='SlackLato-Light'>
                      By continuing, you're agreeing to our{' '}
                      <span>Customer Terms of Service</span>,{' '}
                      <span>Privacy Policy</span>, and{' '}
                      <span>Cookie Policy</span>.
                    </b.Text>
                  </Policy>
                ) : null}
              </LeftWrapper>
            </b.Flex>
          </Left>
          <Right pl={5}>
            <b.Flex alignItems='center'>
              <MiniWorkspace
                team={team}
                opacity={opacity}
                channel={channel}
                children={children}
              />
            </b.Flex>
          </Right>
        </b.Flex>
      </InnerWrapper>
    </Wrapper>
  );
};
