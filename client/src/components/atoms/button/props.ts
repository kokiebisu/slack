export interface PrimaryButtonProps {
  title?: string;
  inverse?: boolean;
  onPress?: () => void;
}

export interface ButtonProps {
  to?: string;
  type: string;
  [x: string]: any;
}
