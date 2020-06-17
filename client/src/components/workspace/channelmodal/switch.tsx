import * as React from 'react';

// Blocks
import { Wrapper, Inner } from './switch.styles';

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
