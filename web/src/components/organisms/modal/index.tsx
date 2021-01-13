import React, { useContext } from "react";
import { css, ThemeContext } from "styled-components";

import * as b from "../../../global/blocks";

/** variants */
import { LaunchModal } from "./modal.launch";
import { ChannelModal } from "./modal.channel";
import { LandingModal } from "./modal.landing";
import { InviteModal } from "./modal.invite";
import { WorkspaceModal } from "./modal.workspace";
import { SkipModal } from "./modal.skip";
import { AnimatePresence } from "framer-motion";

export interface ModalProps {
  variant: string;
  extendsTo?: any;
  criteria?: boolean;
  [x: string]: any;
}

export const Modal: React.FC<ModalProps> = ({
  variant,
  extendsTo,
  criteria,
  ...props
}) => {
  const theme = useContext(ThemeContext);
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
        box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 8px;
        border-radius: 8px;
      `,
    },
  };

  if (criteria !== undefined) {
    return (
      <b.Box>
        <AnimatePresence>
          {criteria && (
            <b.Box>
              <b.Flex justifyContent="center" alignItems="center">
                <b.Box
                  bg={theme.colors.white}
                  position="relative"
                  data-testid={`${variant}-modal`}
                  extends={variants[variant].extendsTo}
                >
                  {variants[variant].component}
                </b.Box>
              </b.Flex>
            </b.Box>
          )}
        </AnimatePresence>
      </b.Box>
    );
  }

  return (
    <b.Box
      data-testid={`${variant}-modal`}
      extends={variants[variant].extendsTo}
    >
      {variants[variant].component}
    </b.Box>
  );
};
