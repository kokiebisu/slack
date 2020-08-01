import * as React from 'react';

import { Wrapper, Inner } from 'styles/Workspace/Switch';

interface Props {
  isOn: boolean;
  switchToggle: () => void;
}

export const Switch: React.FC<Props> = ({ isOn, switchToggle }) => {
  return (
    <Wrapper
      className={isOn ? `switch on` : `switch off`}
      onClick={switchToggle}>
      <Inner className={isOn ? `switch on` : `switch off`} />
    </Wrapper>
  );
};
