import React from "react";

/** variants */
import { LaunchModal } from "./modal.launch";
import { ChannelModal } from "./modal.channel";
import { LandingModal } from "./modal.landing";

export interface ModalProps {
  variant?: string;
  [x: string]: any;
}

export const Modal: React.FC<ModalProps> = ({
  variant = "launch",
  ...props
}) => {
  const variants = {
    launch: <LaunchModal {...props} />,
    channel: <ChannelModal {...props} />,
    landing: <LandingModal {...props} />,
  };
  return <div data-testid={`${variant}-modal`}>{variants[variant]}</div>;
};
