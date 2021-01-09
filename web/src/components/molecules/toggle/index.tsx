import { SwitchToggle } from "./toggle.switch";

export interface ToggleProps {
  variant: string;
  [property: string]: any;
}

export const Toggle: React.FC<ToggleProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    switch: <SwitchToggle {...props} />,
  };
  return variants[variant];
};
