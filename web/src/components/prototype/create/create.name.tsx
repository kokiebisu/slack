import { Input } from "components/atoms/input/input.component";
import React from "react";
import * as b from "global/blocks";

export const NameCreate: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <b.Box>
      {/* <b.Box>
        <b.Text fontFamily="SlackLato-Black" fontSize={26} color="black__light">
          {title}
        </b.Text>
      </b.Box>
      <form onSubmit={transaction}>
        {inputPlaceholder && (
          <b.Box mt={4} mb={3} width={1}>
            <Input
              value={input}
              onChange={(e) => {
                modifyInput(e.target.value);
              }}
              placeholder={inputPlaceholder}
            />
          </b.Box>
        )}
        {description && (
          <b.Box mt={4} mb={3} width={1}>
            <b.Text lineHeight={1.7}>{description}</b.Text>
          </b.Box>
        )}
        <b.Box width={1}>
          <NextButton name={name} type="submit">
            <b.Text>{buttonName ? `${buttonName}` : `Next`}</b.Text>
          </NextButton>
        </b.Box>
      </form>
      {requirePolicy ? (
        <Policy my={4}>
          <b.Text fontSize={12} fontFamily="SlackLato-Light">
            By continuing, you're agreeing to our{" "}
            <span>Customer Terms of Service</span>, <span>Privacy Policy</span>,
            and <span>Cookie Policy</span>.
          </b.Text>
        </Policy>
      ) : null} */}
    </b.Box>
  );
};
