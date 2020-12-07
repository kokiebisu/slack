export interface LaunchCardProps {
  name?: string;
  url?: string;
  color?: string;
}

export interface PolicyCardProps {}

export interface CardProps {
  type?: string;
  [x: string]: any;
}
