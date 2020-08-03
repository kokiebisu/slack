import * as React from 'react';

// Blocks
import * as b from 'global/blocks';
import { StyledInput, Wrapper } from 'modals/Invite/EmailInput.styles';

type Dispatch = (action: Action) => void;
type Action =
  | { type: 'add_email'; payload: string }
  | { type: 'add_name'; payload: string };

interface Props {
  input: { email: string; name: string };
  addInput: (action: Action) => void;
}

export const EmailInput: React.FC<Props> = ({ input, addInput }) => {
  return (
    <Wrapper>
      <b.Flex>
        <StyledInput>
          <input
            value={input.email}
            placeholder='name@example.com'
            onChange={(e) =>
              addInput({ type: 'add_email', payload: e.target.value })
            }
          />
        </StyledInput>
        <StyledInput>
          <input
            value={input.name}
            placeholder='Optional'
            onChange={(e) =>
              addInput({ type: 'add_name', payload: e.target.value })
            }
          />
        </StyledInput>
      </b.Flex>
    </Wrapper>
  );
};
