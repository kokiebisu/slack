export interface PrimaryButtonProps {
  title?: string;
  inverse?: boolean;
  onPress?: () => void;
  size?: 'sm' | 'lg';
}

export interface ButtonProps {
  to?: string;
  type: string;
  [x: string]: any;
}
