import React from "react";
import * as b from "../../../global/blocks";
import styled from "styled-components";

type Action =
  | { type: "add_email"; payload: string }
  | { type: "add_name"; payload: string };

interface Props {
  input: { email: string; name: string };
  addInput: (action: Action) => void;
}

export const ModalInput: React.FC<{ value: string; onChange: any }> = ({
  value,
  onChange,
}) => {
  return (
    <StyledInput>
      <input value={value} placeholder="name@example.com" onChange={onChange} />
    </StyledInput>
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
