import React from "react";
import { ChannelSubSection } from "./subsection.channel";

export interface SubSectionProps {
  variant?: string;
  [property: string]: any;
}

export const SubSection: React.FC<SubSectionProps> = ({
  variant = "channel",
  ...props
}) => {
  const variants = {
    channel: <ChannelSubSection {...props} />,
  };
  return <div data-testid={`${variant}-subsection`}>{variants[variant]}</div>;
};
