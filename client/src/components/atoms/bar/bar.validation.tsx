import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Util
import {
  weakRegex,
  mediumRegex,
  strongRegex,
  veryStrongRegex,
} from "util/passwordUtil";
import styled from "styled-components";

export const ValidationBar: React.FC<{ password?: string }> = ({
  password = "pass",
}) => {
  const criterias = [weakRegex, mediumRegex, strongRegex, veryStrongRegex];
  return (
    <b.Box>
      <PasswordValidationWrapper>
        {criterias.map((criteria, index) => (
          <div key={index}>
            <PasswordValidation
              className={password.match(criteria) ? "cleared" : ""}
            />
          </div>
        ))}
      </PasswordValidationWrapper>
    </b.Box>
  );
};

const PasswordValidationWrapper = styled(b.Box)`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
`;

const PasswordValidation = styled(b.Box)`
  height: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gray__lighter};
  &.cleared {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
