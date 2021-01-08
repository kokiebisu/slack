import React from "react";

/** variants */
import { ChannelWorkspace } from "./workspace.channel";
import { DirectMessageWorkspace } from "./workspace.directmessage";
import { DraftWorkspace } from "./workspace.draft";
import { MentionWorkspace } from "./workspace.mention";
import { SavedWorkspace } from "./workspace.saved";
import { ThreadsWorkspace } from "./workspace.threads";

export interface PrototypeProps {
  variant?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "channel",
  ...props
}) => {
  const variants = {
    channel: <ChannelWorkspace {...props} />,
    directmessage: <DirectMessageWorkspace {...props} />,
    draft: <DraftWorkspace {...props} />,
    mention: <MentionWorkspace {...props} />,
    saved: <SavedWorkspace {...props} />,
    threads: <ThreadsWorkspace {...props} />,
  };
  return <div>{variants[variant]}</div>;
};
