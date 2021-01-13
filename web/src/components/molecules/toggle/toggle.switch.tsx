import * as React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

export const SwitchToggle: React.FC<{
  isOn?: boolean;
  switchToggle?: () => void;
}> = ({ isOn, switchToggle }) => {
  return (
    <Wrapper
      className={isOn ? `switch on` : `switch off`}
      onClick={switchToggle}
    >
      <Inner className={isOn ? `switch on` : `switch off`} />
    </Wrapper>
  );
};

const Wrapper = styled(b.Button)`
  width: 50px;
  height: 30px;
  border-radius: 100px;
  padding: 5px;
  display: flex;
  cursor: pointer;

  &.switch {
    &.on {
      background-color: ${({ theme }) => theme.colors.green};
      justify-content: flex-end;
    }

    &.off {
      background-color: ${({ theme }) => theme.colors.white__dark};
      justify-content: flex-start;
    }
  }
`;

const Inner = styled(b.Box)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 200px;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.02);
`;
