import React from "react";
import * as b from "global/blocks";
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
      className={`${size}`}
      onClick={onPress}
      backgroundColor={inverse ? "transparent" : fill}
      border="1px solid"
      borderColor={inverse ? fill : "transparent"}
      borderRadius={3}
    >
      <Title
        color={inverse ? fill : textColor}
        fontSize={14}
        letterSpacing={1}
        fontFamily="CircularPro-Bold"
      >
        {title}
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  @media ${size.lg} {
    width: auto;
    padding: 0 40px;
  }

  &.sm {
    padding: 15px;
  }
`;

const Title = styled(b.Text)`
  white-space: nowrap;
  text-transform: uppercase;
`;
