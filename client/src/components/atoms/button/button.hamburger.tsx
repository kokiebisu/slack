import React from "react";
import styled from "styled-components";

/** assets */
import { Hamburger } from "assets/svg";

/** colors */
import { main } from "global/colors";

export const HamburgerButton: React.FC<{ onPress?: () => void }> = ({
  onPress = () => alert("hamburger button pressed"),
}) => {
  return (
    <Wrapper onClick={onPress}>
      <Hamburger width={25} fill={main.colors.black} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
