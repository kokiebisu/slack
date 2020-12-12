import * as React from "react";

// Blocks
import * as b from "global/blocks";

import styled from "styled-components";

// Util
import { textValidation } from "util/passwordUtil";

export const PasswordDialog: React.FC<{ password?: string }> = ({
  password = "password",
}) => {
  return (
    <b.Box>
      {password.length > 0 && textValidation(password) ? (
        <b.Text fontFamily="SlackLato-Regular" fontSize={14} className="weak">
          {textValidation(password)}
        </b.Text>
      ) : null}
    </b.Box>
  );
};
