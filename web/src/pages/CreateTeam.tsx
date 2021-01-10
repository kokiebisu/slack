import * as React from "react";
import { Dispatch, SetStateAction, FormEvent } from "react";

import styled from "styled-components";

import { size } from "../global/sizes";

// Blocks
import * as b from "../global/blocks";

import { Header } from "../components/organisms/header/header.component";
import { Modal } from "../components/organisms/modal/modal.component";
import { Prototype } from "../components/prototype/create";

interface Props {
  title?: string;
  inputPlaceholder?: string;
  requirePolicy?: boolean;
  opacity?: number;
  name?: string;
  description?: string;
  buttonName?: string;
  team?: string;
  channel?: string;
  authenticated?: boolean;
  transaction?: (e: FormEvent<HTMLFormElement>) => void;
  input?: string;
  modifyInput?: Dispatch<SetStateAction<string>>;
}

export const CreateTeamPage: React.FC<Props> = ({
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
      <b.Box width={1} height="100%">
        <b.Flex>
          <Left>
            <b.Flex>
              <b.Box maxWidth={400}>
                <Prototype variant="default" />
              </b.Box>
            </b.Flex>
          </Left>
          <Right pl={5}>
            <b.Flex alignItems="center">
              <Modal
                variant="workspace"
                team={team}
                opacity={opacity}
                channel={channel}
                children={children}
              />
            </b.Flex>
          </Right>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.AnimatedBox)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
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
