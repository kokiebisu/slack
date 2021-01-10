import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

/** global */
import * as b from "../../../global/blocks";

/** assets */
import { NameLogo } from "../../../assets/svg";

export const CreateHeader: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box position="sticky" top="0" zIndex={99}>
      <b.Box
        boxShadow="0 1px 1px rgba(0, 0, 0, 0.15)"
        borderBottom="0.5px solid"
        borderColor={theme.colors.white__dark}
        height={70}
        backgroundColor={theme.colors.white}
      >
        <b.Container>
          <b.Flex alignItems="center" justifyContent="center">
            <Link to="/">
              <b.Box mr={4}>
                <NameLogo width={100} height={60} />
              </b.Box>
            </Link>
          </b.Flex>
        </b.Container>
      </b.Box>
    </b.Box>
  );
};
