import * as b from "global/blocks";
import { SetupTeamNameClient } from "./setup-team-name";

export const Prototype: React.FC<{
  variant: string;
  [property: string]: any;
}> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    "setup-team-name": <SetupTeamNameClient {...props} />,
  };
  return <b.Box>{variants[variant]}</b.Box>;
};
