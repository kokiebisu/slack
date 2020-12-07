export interface TogetherBulletProps {
  together?: string;
}

export interface CheckBulletProps {
  title?: string;
}

export interface MoreBulletProps {
  more?: string;
}

export interface BulletProps {
  type?: string;
  [x: string]: any;
}
