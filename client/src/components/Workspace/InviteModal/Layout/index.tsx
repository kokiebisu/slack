import React from 'react';
import { useReducer } from 'react';

// Blocks
import * as b from 'styles/blocks';

// Styles
import {
  Wrapper,
  Container,
} from 'components/Workspace/InviteModal/Layout/index.styles';

// Context
import { useToggleDispatch } from 'context/toggle-context';

// Query
import { Before } from 'components/Workspace/InviteModal/Before';

// Animation
import { AnimatePresence } from 'framer-motion';
import { After } from 'components/Workspace/InviteModal/After/Layout';

// Types
type State = { email: string; name: string; error: string; done: boolean };
type Action =
  | { type: 'add_email'; payload: string }
  | { type: 'add_name'; payload: string }
  | { type: 'give_error'; payload: string }
  | { type: 'done' };

// Reducer
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_email':
      return { ...state, email: action.payload };
    case 'add_name':
      return { ...state, name: action.payload };
    case 'give_error':
      return { ...state, error: action.payload };
    case 'done':
      return { ...state, done: !state.done };
    default:
      return state;
  }
};

export const InviteModal = () => {
  const dispatchToggle = useToggleDispatch();

  const [input, dispatchInput] = useReducer(reducer, {
    email: '',
    name: '',
    error: '',

    done: false,
  });

  return (
    <AnimatePresence>
      <Wrapper>
        <b.Flex justifyContent='center' alignItems='center'>
          <Container animate={{ y: 0 }} initial={{ y: 15 }}>
            {input.done ? (
              <b.Box
                key='after'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <After input={input} dispatchToggle={dispatchToggle} />
              </b.Box>
            ) : (
              <b.Box
                key='before'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <Before
                  dispatchToggle={dispatchToggle}
                  input={input}
                  dispatchInput={dispatchInput}
                  finish={() => dispatchInput({ type: 'done' })}
                />
              </b.Box>
            )}
          </Container>
        </b.Flex>
      </Wrapper>
    </AnimatePresence>
  );
};
