import { GetStartedPrototype } from "./auth.getstarted";

export interface PrototypeProps {
  variant: string;
}

export const Prototype: React.FC<PrototypeProps> = ({ variant }) => {
  const variants: { [variant: string]: JSX.Element } = {
    getstarted: <GetStartedPrototype />,
  };
  return <div>{variants[variant]}</div>;
};
