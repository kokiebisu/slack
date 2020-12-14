import React, { useContext } from "react";

// Blocks
import * as b from "global/blocks";

import styled, { ThemeContext } from "styled-components";

// Svgs
import { CheckCircle } from "assets/svg";

import "util/string";
import { emailRegex, fullNameRegex } from "util/passwordUtil";

export const PlainInput: React.FC<{
  value?: string;
  info?: any;
  setInfo?: any;
}> = ({
  value = "fullname",
  setInfo,
  info = {
    name: "",
  },
}) => {
  const theme = useContext(ThemeContext);
  const types = {
    fullname: {
      placeholder: "Your full name",
      criteria: info[value]?.match(fullNameRegex),
    },
    email: {
      placeholder: "name@work-email.com",
      criteria: info[value]?.match(emailRegex),
    },
  };
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
          border="1px solid"
          borderColor={theme.colors.gray}
          borderRadius={3}
          placeholder={types[value].placeholder}
        />
        {types[value].criteria ? (
          <IconWrapper position="absolute" top="50%" right={12}>
            <CheckCircle width={18} height={18} fill={theme.colors.blue} />
          </IconWrapper>
        ) : null}
      </b.Box>
    </div>
  );
};

const IconWrapper = styled(b.Box)`
  transform: translateY(-45%);
`;
