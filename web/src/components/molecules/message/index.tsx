import { ClientMessage } from "./message.client";
import { UserMessage } from "./message.user";

export interface MessageProps {
  variant: string;
  [property: string]: any;
}

export const Message: React.FC<MessageProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    client: <ClientMessage {...props} />,
    user: <UserMessage {...props} />,
  };
  return variants[variant];
};
