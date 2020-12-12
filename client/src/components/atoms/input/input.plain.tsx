import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Styles
import { InputWrapper, Input, IconWrapper } from "./input.styles";

// Svgs
import { CheckCircle } from "assets/svg";

import "util/string";

export const PlainInput: React.FC<{
  value?: string;
  info?: any;
  setInfo?: any;
  criteria?: boolean;
  placeholder?: string;
}> = ({
  value = "property",
  setInfo,
  info = {
    name: "",
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
    </div>
  );
};
