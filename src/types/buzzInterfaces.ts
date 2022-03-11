export interface BuzzProps {
  buzz: BuzzObject;
  onClick: React.MouseEventHandler;
}
export interface BuzzObject {
  category: string;
  likes: number;
  comments: number[];
  author: string;
  text: string;
  date: Date;
  id: string;
}

export interface BuzzsArrayProps {
  buzzs: BuzzObject[];
}
