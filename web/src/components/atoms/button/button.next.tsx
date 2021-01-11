import React, { useContext } from "react";
import * as b from "../../../global/blocks";
import { ThemeContext } from "styled-components";

/** vectors */
import { RightArrow } from "../../../assets/svg";

export const NextButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box borderRadius={5} backgroundColor="green" py={3} px={4} width={1}>
      <b.Flex justifyContent="center" alignItems="center">
        <b.Box mr={3}>
          <b.Text fontSize={15} color="white" fontFamily="SlackLato-Bold">
            Continue
          </b.Text>
        </b.Box>
        <b.Box>
          <RightArrow width={13} height={13} fill={theme.colors.white} />
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
