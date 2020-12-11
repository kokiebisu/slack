import React from "react";
import styled from "styled-components";
import { size } from "global/sizes";
import { main } from "global/colors";

export const PrimaryButton: React.FC<{
  title?: string;
  inverse?: boolean;
  onPress?: () => void;
  size?: "sm" | "lg";
  to?: string;
  fill?: any;
  textColor?: any;
}> = ({
  fill = main.colors.primary__light,
  title = "Primary Button",
  textColor = main.colors.white,
  onPress,
  inverse = false,
  size = "sm",
}) => {
  return (
    <Wrapper
      fill={fill}
      textColor={textColor}
      inverse={inverse}
      className={`${size}`}
      onClick={onPress}
    >
      {title}
    </Wrapper>
  );
};

export const Wrapper = styled.button`
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  font-size: 14px;
  font-family: "CircularPro-Bold";
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid
    ${({ inverse, fill }: { inverse: boolean; fill: any }) =>
      inverse ? fill : "transparent"};
  background-color: ${({ inverse, fill }: { inverse: boolean; fill: any }) =>
    inverse ? "transparent" : fill};
  color: ${({
    inverse,
    fill,
    textColor,
  }: {
    inverse: boolean;
    fill: any;
    textColor: any;
  }) => (inverse ? fill : textColor)};

  @media ${size.lg} {
    width: auto;
    padding: 0 40px;
  }

  &.inverse {
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.lg} {
      margin-top: 0;
      margin-left: 15px;
    }
  }

  &.sm {
    padding: 13px 20px;
    border-radius: 5px;
  }

  &.md {
    padding: 22px 24px;
    border-radius: 5px;
  }

  &.lg {
    padding: 20px;
    height: 60px;
    border-radius: 3px;
  }
`;
