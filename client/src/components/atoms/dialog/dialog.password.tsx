import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Styles
import { Wrapper, ValidationTextWrapper } from "styles/shared/ValidationText";

// Util
import { textValidation } from "util/passwordUtil";

export const PasswordDialog: React.FC<{ password?: string }> = ({
  password = "password",
}) => {
  return (
    <Wrapper mb={1}>
      {password.length > 0 && (
        <b.Flex justifyContent="center">
          <ValidationTextWrapper mt={1}>
            <b.Flex justifyContent="flex-end">
              <b.Box>
                {textValidation(password) ? (
                  <b.Text
                    fontFamily="SlackLato-Regular"
                    fontSize={14}
                    className="weak"
                  >
                    {textValidation(password)}
                  </b.Text>
                ) : null}
              </b.Box>
            </b.Flex>
          </ValidationTextWrapper>
        </b.Flex>
      )}
    </Wrapper>
  );
};
