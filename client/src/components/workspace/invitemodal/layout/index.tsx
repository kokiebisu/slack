import React from 'react';
import { useReducer } from 'react';
import { useParams } from 'react-router-dom';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Wrapper, Container } from './index.styles';

// Context
import { useToggleDispatch } from '../../../../context/toggle-context';

// Query
import { Before } from '../before';

// Animation
import { AnimatePresence } from 'framer-motion';

// Types
type State = { email: string; name: string; done: boolean };
type Action =
  | { type: 'add_email'; payload: string }
  | { type: 'add_name'; payload: string }
  | { type: 'done' };

// Reducer
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_email':
      return { ...state, email: action.payload };
    case 'add_name':
      return { ...state, name: action.payload };
    case 'done':
      return { ...state, done: !state.done };
    default:
      return state;
  }
};

export const InviteModal = () => {
  const { teamId } = useParams();
  const dispatchToggle = useToggleDispatch();

  const [input, dispatchInput] = useReducer(reducer, {
    email: '',
    name: '',
    done: false,
  });

  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <Container animate={{ y: 0 }} initial={{ y: 15 }}>
          <AnimatePresence>
            {input.done ? null : (
              <b.Box
                key='before'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Before
                  dispatchToggle={dispatchToggle}
                  input={input}
                  dispatchInput={dispatchInput}
                  finish={() => dispatchInput({ type: 'done' })}
                />
              </b.Box>
            )}
          </AnimatePresence>
        </Container>
      </b.Flex>
    </Wrapper>
  );
};
