import React from "react";

import styled from "styled-components";

import * as b from "global/blocks";

import { Bar } from "components/atoms/bar/bar.component";
import { Dialog } from "components/atoms/dialog/dialog.component";

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
        <b.Box></b.Box>
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

const InputWrapper = styled(b.Box)`
  position: relative;
`;

const Input = styled(b.Input)`
  width: 100%;
  padding: 13px 35px 13px 13px;
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.checkcircle {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 12px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  &.warning {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.pink};
      }
      rect {
        fill: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;
