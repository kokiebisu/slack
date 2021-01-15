import { ClientMessage } from "./message.client";

export interface MessageProps {
  variant: string;
  [property: string]: any;
}

export const Message: React.FC<MessageProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    client: <ClientMessage {...props} />,
  };
  return variants[variant];
};
