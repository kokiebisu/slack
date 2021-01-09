import React from "react";
import { css } from "styled-components";

import * as b from "../../../global/blocks";

/** variants */
import { LaunchModal } from "./modal.launch";
import { ChannelModal } from "./modal.channel";
import { LandingModal } from "./modal.landing";
import { InviteModal } from "./modal.invite";
import { WorkspaceModal } from "./modal.workspace";

export interface ModalProps {
  variant: string;
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
  };
  return (
    <b.Box
      data-testid={`${variant}-modal`}
      extendsTo={variants[variant].extendsTo}
    >
      {variants[variant].component}
    </b.Box>
  );
};
