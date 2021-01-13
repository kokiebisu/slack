import React from "react";
import { ChannelSubSection } from "./subsection.channel";

export interface SubSectionProps {
  variant: string;
  [property: string]: any;
}

export const SubSection: React.FC<SubSectionProps> = ({
  variant,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    channel: <ChannelSubSection {...props} />,
  };
  return <div data-testid={`${variant}-subsection`}>{variants[variant]}</div>;
};
