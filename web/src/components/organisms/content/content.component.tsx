import React from "react";
import { ChannelContent } from "./content.channel";
import { DirectMessageContent } from "./content.directmessage";
import { MentionContent } from "./content.mention";
import { ThreadContent } from "./content.thread";
import { DraftContent } from "./content.draft";
import { SavedContent } from "./content.saved";

export interface ContentProps {
  variant?: string;
  [property: string]: any;
}

export const Content: React.FC<ContentProps> = ({
  variant = "channel",
  ...props
}) => {
  const variants = {
    channel: <ChannelContent {...props} />,
    directmessage: <DirectMessageContent {...props} />,
    thread: <ThreadContent {...props} />,
    mention: <MentionContent {...props} />,
    draft: <DraftContent {...props} />,
    saved: <SavedContent {...props} />,
  };
  return <div data-testid={`${variant}-content`}>{variants[variant]}</div>;
};
