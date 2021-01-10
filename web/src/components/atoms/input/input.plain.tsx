import React, { useContext } from "react";

// Blocks
import * as b from "../../../global/blocks";

import styled, { ThemeContext } from "styled-components";

// Svgs
import { CheckCircle } from "../../../assets/svg";

import "../../../util/string";
import { emailRegex, fullNameRegex } from "../../../util/passwordUtil";

export const PlainInput: React.FC<{
  type?: string;
  info?: any;
  setInfo?: any;
}> = ({
  type = "fullname",
  setInfo,
  info = {
    name: "",
  },
}) => {
  const theme = useContext(ThemeContext);
  const types: {
    [type: string]: { placeholder: string; criteria: boolean };
  } = {
    fullname: {
      placeholder: "Your full name",
      criteria: info[type]?.match(fullNameRegex),
    },
    email: {
      placeholder: "name@work-email.com",
      criteria: info[type]?.match(emailRegex),
    },
  };
  return (
    <div>
      <b.Box>
        <b.Input
          py={10}
          pr={6}
          pl={3}
          width={1}
          fontSize={18}
          autoCapitalize="sentences"
          value={info[type]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInfo({ ...info, [type as string]: e.target.value })
          }
          border="1px solid"
          borderColor={theme.colors.gray}
          borderRadius={4}
          placeholder={types[type].placeholder}
        />
        {types[type].criteria ? (
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
