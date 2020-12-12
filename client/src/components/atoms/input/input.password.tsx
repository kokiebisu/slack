import React from "react";

import * as b from "global/blocks";

import { Bar } from "components/atoms/bar/bar.component";
import { Dialog } from "components/atoms/dialog/dialog.component";
import { IconWrapper, Input, InputWrapper } from "./input.styles";
import { CheckCircle } from "assets/svg/Icons";

export const PasswordInput: React.FC<{
  value?: string;
  info?: any;
  setInfo?: any;
  criteria?: boolean;
  placeholder?: string;
}> = ({
  value = "password",
  setInfo,
  info = {
    password: "",
  },
  placeholder = "Placeholder here",
  criteria = false,
}) => {
  return (
    <div>
      <b.Box my={2}>
        <b.Text fontFamily="SlackLato-Bold">{value.capitalize()}</b.Text>
      </b.Box>
      <InputWrapper>
        <Input
          autoCapitalize="sentences"
          value={info[value]}
          onChange={(e) =>
            setInfo({ ...info, [value as string]: e.target.value })
          }
          border="1px solid gray"
          borderRadius={3}
          placeholder={placeholder}
        />
        {criteria ? (
          <IconWrapper className="checkcircle">
            <CheckCircle />
          </IconWrapper>
        ) : null}
      </InputWrapper>
      <b.Box mt={2}>
        <Bar variant="validation" password={info.password} />
      </b.Box>
      <div>
        <Dialog variant="password" password={info.password} />
      </div>
    </div>
  );
};
