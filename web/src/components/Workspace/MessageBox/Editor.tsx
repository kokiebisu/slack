import React from "react";
import { useState } from "react";

import { Bold } from "assets/svg";

import { Wrapper } from "styles/Workspace/MessageBox/Editor";

interface Props {
  sendMessage: (message: string) => Promise<void>;
}

export const MyEditor: React.FC<Props> = ({ sendMessage }) => {
  return (
    <Wrapper className="MyEditor">
      <div></div>
    </Wrapper>
  );
};
