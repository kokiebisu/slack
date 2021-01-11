import React from "react";
import { css } from "styled-components";

import * as b from "../../../global/blocks";

/** variants */
import { LaunchModal } from "./modal.launch";
import { ChannelModal } from "./modal.channel";
import { LandingModal } from "./modal.landing";
import { InviteModal } from "./modal.invite";
import { WorkspaceModal } from "./modal.workspace";
import { SkipModal } from "./modal.skip";

export interface ModalProps {
  variant: string;
  extendsTo?: any;
  [x: string]: any;
}

export const Modal: React.FC<ModalProps> = ({ variant, ...props }) => {
  const variants: {
    [property: string]: { component: JSX.Element; extendsTo?: any };
  } = {
    launch: {
      component: <LaunchModal {...props} />,
      extendsTo: css``,
    },
    channel: {
      component: <ChannelModal {...props} />,
      extendsTo: css`
        max-width: 500px;
      `,
    },
    landing: {
      component: <LandingModal {...props} />,
      extendsTo: css``,
    },
    invite: {
      component: <InviteModal {...props} />,
      extendsTo: css``,
    },
    workspace: {
      component: <WorkspaceModal {...props} />,
      extendsTo: css``,
    },
    skip: {
      component: <SkipModal {...props} />,
      extendsTo: css`
        width: 500px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.13);
        border-radius: 8px;
      `,
    },
  };
  return (
    <b.Box
      data-testid={`${variant}-modal`}
      extends={variants[variant].extendsTo}
    >
      {variants[variant].component}
    </b.Box>
  );
};
