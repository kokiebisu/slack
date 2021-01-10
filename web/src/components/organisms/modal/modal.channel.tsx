import React, { useContext } from "react";
import { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
// Blocks
import * as b from "../../../global/blocks";

// Svgs
import { Close, Info, ThinHashTag } from "../../../assets/svg";

// Components
import { Toggle } from "../../molecules/toggle";

// Context
import { useToggleDispatch } from "../../../context/toggle-context";

type State = { name: string; description: string };
type Action =
  | { type: "add_name"; payload: string }
  | { type: "add_description"; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add_name":
      return { ...state, name: action.payload };
    case "add_description":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export const ChannelModal: React.FC<{}> = () => {
  const dispatchToggle = useToggleDispatch();
  const theme = useContext(ThemeContext);
  const [error, setError] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [input, dispatchInput] = useReducer(reducer, {
    name: "",
    description: "",
  });
  const { teamId }: { teamId?: string } = useParams();

  const handleSubmit = async () => {
    if (!input.name || !input.description) {
      setError("Something is wrong");
      return;
    }

    if (teamId) {
      // const response = await create({
      //   variables: {
      //     name: input.name,
      //     teamId,
      //     description: input.description,
      //     isPublic: !isPrivate,
      //   },
      // });
      // if (response.data?.createChannel.ok) {
      //   dispatchToggle({ type: "toggle_channel" });
      // }
    }
  };

  return (
    <b.Box>
      <b.Box mb={20}>
        <b.Flex justifyContent="space-between">
          <b.Box>
            <b.Text
              fontFamily="SlackLato-Black"
              fontSize={28}
              color={theme.colors.black}
            >
              {isPrivate ? "Create a private channel" : "Create a channel"}
            </b.Text>
          </b.Box>
          <IconButtonWrapper
            className="close"
            onClick={() => dispatchToggle({ type: "toggle_channel" })}
          >
            <Close />
          </IconButtonWrapper>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Text
          fontSize={14}
          lineHeight={1.5}
          fontFamily="SlackLato-Regular"
          color={theme.colors.gray__light}
        >
          Channels are where your team communicates. They’re best when organized
          around a topic — #marketing, for example.
        </b.Text>
      </b.Box>
      <SectionHeader>
        <b.Text>Name</b.Text>
      </SectionHeader>
      <NameWrapper>
        <b.Box>
          <ThinHashTag />
        </b.Box>
        <StyledInput
          onChange={(e) =>
            dispatchInput({ type: "add_name", payload: e.target.value })
          }
          value={input.name}
          placeholder="e.g. plan-budget"
          className="name"
        />
      </NameWrapper>
      {error && (
        <b.Box>
          <b.Text>{error}</b.Text>
        </b.Box>
      )}
      <SectionHeader>
        <b.Text>Description (optional)</b.Text>
      </SectionHeader>
      <b.Box>
        <StyledInput
          onChange={(e) =>
            dispatchInput({
              type: "add_description",
              payload: e.target.value,
            })
          }
          value={input.description}
          className="description"
        />
      </b.Box>
      <Hint>
        <b.Text>What's this channel about?</b.Text>
      </Hint>
      <PrivateOption>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box>
            <b.Box className="title">
              <b.Text>Make Private</b.Text>
            </b.Box>
            <b.Box className="description">
              {isPrivate ? (
                <b.Text>
                  <b.Span>This can’t be undone.</b.Span> A private channel
                  cannot be made public later on.
                </b.Text>
              ) : (
                <b.Text>
                  When a channel is set to private, it can only be viewed or
                  joined by invitation.
                </b.Text>
              )}
            </b.Box>
          </b.Box>
          <b.Box>
            <Toggle
              variant="switch"
              isOn={isPrivate}
              switchToggle={() => setIsPrivate((isPrivate) => !isPrivate)}
            />
          </b.Box>
        </b.Flex>
      </PrivateOption>
      <b.Box>
        <b.Flex justifyContent="space-between" alignItems="center">
          <b.Box>
            <b.Flex alignItems="center">
              <IconButtonWrapper className="info">
                <Info />
              </IconButtonWrapper>
              <b.Box>
                <b.Text
                  fontSize={15}
                  color={theme.colors.gray__light}
                  fontFamily="SlackLato-Regular"
                >
                  Learn more
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Button
            borderRadius={5}
            py={3}
            px={4}
            backgroundColor={theme.colors.gray__lighter}
            onClick={handleSubmit}
          >
            <b.Text
              fontSize={15}
              fontFamily="SlackLato-Bold"
              color={theme.colors.gray}
            >
              Create
            </b.Text>
          </b.Button>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};

const IconButtonWrapper = styled(b.Button)`
  position: relative;
  &.close {
    width: 35px;
    height: 35px;
    svg {
      position: relative;
      top: 2px;
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:hover {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
  &.info {
    top: 1.5px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const SectionHeader = styled(b.Box)`
  margin-top: 20px;
  margin-bottom: 10px;
  & > p {
    font-family: "SlackLato-Bold";
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray__light};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.gray};
  &.name {
    padding: 12px 0 12px 40px;
  }
  &.description {
    padding: 12px 0 12px 15px;
  }
`;

const Hint = styled(b.Box)`
  margin-top: 6px;
  p {
    font-size: 13px;
    font-family: "SlackLato-Light";
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const PrivateOption = styled(b.Box)`
  margin: 30px 0;
  & > div {
    & > div {
      &:nth-child(1) {
        width: 60%;
      }
      &:nth-child(2) {
        width: auto;
      }
    }
  }
  div {
    &.title {
      margin-bottom: 10px;
      p {
        font-size: 15px;
        font-family: "SlackLato-Bold";
        color: ${({ theme }) => theme.colors.black__light};
      }
    }
    &.description {
      p {
        line-height: 1.5;
        font-family: "SlackLato-Regular";
        font-size: 15px;
        color: ${({ theme }) => theme.colors.gray__light};
        span {
          font-family: "SlackLato-Bold";
          color: ${({ theme }) => theme.colors.gray__darker};
        }
      }
    }
  }
`;

const NameWrapper = styled(b.Box)`
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    transform: translateY(-40%) translateX(100%);
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;
