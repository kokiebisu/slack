import * as React from "react";
import * as b from "../../global/blocks";
import styled from "styled-components";

type Dispatch = (action: Action) => void;
type Action =
  | { type: "add_email"; payload: string }
  | { type: "add_name"; payload: string };

interface Props {
  input: { email: string; name: string };
  addInput: (action: Action) => void;
}

export const EmailInput: React.FC<Props> = ({ input, addInput }) => {
  return (
    <b.Box>
      <b.Flex>
        <StyledInput>
          <input
            value={input.email}
            placeholder="name@example.com"
            onChange={(e) =>
              addInput({ type: "add_email", payload: e.target.value })
            }
          />
        </StyledInput>
        <StyledInput>
          <input
            value={input.name}
            placeholder="Optional"
            onChange={(e) =>
              addInput({ type: "add_name", payload: e.target.value })
            }
          />
        </StyledInput>
      </b.Flex>
    </b.Box>
  );
};

const StyledInput = styled(b.Box)`
  width: 50%;
  padding-right: 7px;
  & > input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray__light};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.gray};
    padding: 7px 0 7px 6px;
  }
`;
