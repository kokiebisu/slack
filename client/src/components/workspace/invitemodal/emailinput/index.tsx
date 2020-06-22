import * as React from 'react';
import { useReducer } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';
import { StyledInput, Wrapper } from './index.styles';

// Types
type State = { email: string; name: string };
type Action =
  | { type: 'add_email'; payload: string }
  | { type: 'add_name'; payload: string };

// Reducer
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_email':
      return { ...state, name: action.payload };
    case 'add_name':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const EmailInput: React.FC<{}> = () => {
  const [input, dispathInput] = useReducer(reducer, {
    email: '',
    name: '',
  });
  return (
    <Wrapper>
      <b.Flex>
        <StyledInput>
          <input placeholder='name@example.com' />
        </StyledInput>
        <StyledInput>
          <input placeholder='Optional' />
        </StyledInput>
      </b.Flex>
    </Wrapper>
  );
};
