export interface BuzzBasic {
  topic: string;
  text: string;
}

export interface BuzzProps {
  buzz: BuzzObject;
  onClick: React.MouseEventHandler;
}
export interface BuzzObject extends BuzzBasic {
  likes: number;
  comments: number[];
  author: string;
  date: string;
  id: string;
}
