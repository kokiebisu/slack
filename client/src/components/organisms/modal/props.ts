export interface LaunchModalProps {
  teams?: {
    id: string;
    name: string;
    avatarBackground: string;
  }[];
}

export interface ModalProps {
  type?: string;
  [x: string]: any;
}
