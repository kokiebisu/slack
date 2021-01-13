import { DateSeperator } from "./seperator.date";

export interface SeperatorProps {
  variant: string;
  [property: string]: any;
}

export const Seperator: React.FC<SeperatorProps> = ({ variant, ...props }) => {
  const variants: { [property: string]: JSX.Element } = {
    date: <DateSeperator {...props} />,
  };
  return variants[variant];
};
