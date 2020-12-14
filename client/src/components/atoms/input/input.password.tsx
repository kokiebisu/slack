import React, { useContext } from "react";

import styled, { ThemeContext } from "styled-components";

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
  criteria = true,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <b.Box my={2}>
        <b.Text fontFamily="SlackLato-Bold">{value.capitalize()}</b.Text>
      </b.Box>
      <b.Box>
        <b.Input
          py={3}
          pr={6}
          pl={3}
          width={1}
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
          <IconWrapper position="absolute" top="50%" right={12}>
            <CheckCircle width={18} height={18} fill={theme.colors.blue} />
          </IconWrapper>
        ) : null}
      </b.Box>
      <b.Box mt={2}>
        <Bar variant="validation" password={info.password} />
      </b.Box>
      <div>
        <Dialog variant="password" password={info.password} />
      </div>
    </div>
  );
};

const IconWrapper = styled(b.Box)`
  /* position: absolute;
  top: 50%; */
  transform: translateY(-45%);
  /* right: 12px; */
`;
