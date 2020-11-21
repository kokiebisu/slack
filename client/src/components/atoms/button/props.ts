export interface PrimaryButtonProps {
  title?: string;
  inverse?: boolean;
  onPress?: () => void;
  size?: 'sm' | 'lg';
  to?: string;
}

export interface NavButtonProps {
  nav?: 'why' | 'solutions' | 'resources';
}

export interface TransparentButtonProps {
  title?: string;
  onPress?: () => void;
}

export interface HamburgerButtonProps {
  onPress?: () => void;
}

export interface ButtonProps {
  to?: string;
  type: string;
  [x: string]: any;
}
