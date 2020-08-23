export interface ElementProps {
  children?: any;
  className?: string;
}

export interface MapProps {
  [key: string]: () => JSX.Element;
}
