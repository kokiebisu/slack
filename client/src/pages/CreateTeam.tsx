import * as React from "react";
import { Dispatch, SetStateAction, FormEvent } from "react";

import styled from "styled-components";

import { size } from "global/sizes";

// Blocks
import * as b from "global/blocks";

import { Header } from "components/organisms/header/header.component";
import { Others } from "components/organisms/others/others.component";

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
    <Wrapper exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Header variant="create" />
      <InnerWrapper>
        <b.Flex>
          <Left>
            <b.Flex>
              <LeftWrapper>
                <b.Box>
                  <b.Text
                    fontFamily="SlackLato-Black"
                    fontSize={26}
                    color="black__light"
                  >
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
                    <NextButton name={name} type="submit">
                      <b.Text>{buttonName ? `${buttonName}` : `Next`}</b.Text>
                    </NextButton>
                  </b.Box>
                </form>
                {requirePolicy ? (
                  <Policy my={4}>
                    <b.Text fontSize={12} fontFamily="SlackLato-Light">
                      By continuing, you're agreeing to our{" "}
                      <span>Customer Terms of Service</span>,{" "}
                      <span>Privacy Policy</span>, and{" "}
                      <span>Cookie Policy</span>.
                    </b.Text>
                  </Policy>
                ) : null}
              </LeftWrapper>
            </b.Flex>
          </Left>
          <Right pl={5}>
            <b.Flex alignItems="center">
              <Others
                variant="workspace"
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

const Wrapper = styled(b.AnimatedBox)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
`;

const InnerWrapper = styled(b.Box)`
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
  background-color: ${({ theme }) => theme.colors.white__dark};

  @media ${size.md} {
    display: block;
    width: 50%;
  }
`;

const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray__dark};
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: "SlackLato-Bold";
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__lighter};
  }
`;

const Policy = styled(b.Box)`
  span {
    color: ${({ theme }) => theme.colors.blue__light};
  }
`;
