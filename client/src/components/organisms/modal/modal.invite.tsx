import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import * as b from "global/blocks";
import { Template } from "../../template/invite";

import { useToggleDispatch } from "context/toggle-context";

import { AnimatePresence } from "framer-motion";

type State = { email: string; name: string; error: string; done: boolean };
type Action =
  | { type: "add_email"; payload: string }
  | { type: "add_name"; payload: string }
  | { type: "give_error"; payload: string }
  | { type: "done" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add_email":
      return { ...state, email: action.payload };
    case "add_name":
      return { ...state, name: action.payload };
    case "give_error":
      return { ...state, error: action.payload };
    case "done":
      return { ...state, done: !state.done };
    default:
      return state;
  }
};

export const InviteModal: React.FC<{}> = () => {
  const dispatchToggle = useToggleDispatch();

  const [input, dispatchInput] = useReducer(reducer, {
    email: "",
    name: "",
    error: "",
    done: false,
  });

  return (
    <AnimatePresence>
      <Wrapper>
        <b.Flex justifyContent="center" alignItems="center">
          <Container animate={{ y: 0 }} initial={{ y: 15 }}>
            {input.done ? (
              <b.AnimatedBox
                key="after"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Template
                  variant="after"
                  input={input}
                  dispatchToggle={dispatchToggle}
                />
              </b.AnimatedBox>
            ) : (
              <b.AnimatedBox
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Template
                  variant="before"
                  dispatchToggle={dispatchToggle}
                  input={input}
                  dispatchInput={dispatchInput}
                  finish={() => dispatchInput({ type: "done" })}
                />
              </b.AnimatedBox>
            )}
          </Container>
        </b.Flex>
      </Wrapper>
    </AnimatePresence>
  );
};

const Wrapper = styled(b.Box)`
  display: relative;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled(b.AnimatedBox)`
  background-color: white;
  max-width: 650px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;
