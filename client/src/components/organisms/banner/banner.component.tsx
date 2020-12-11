import React from "react";

/** variants */
import { LandingBanner } from "./banner.landing";

export interface BannerProps {
  variant?: string;
  [x: string]: any;
}

export const Banner: React.FC<BannerProps> = ({
  variant = "landing",
  ...props
}) => {
  const variants = {
    landing: <LandingBanner {...props} />,
  };
  return <div data-testid={`${variant}-banner`}>{variants[variant]}</div>;
};
