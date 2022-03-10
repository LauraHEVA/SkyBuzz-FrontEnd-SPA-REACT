export interface BuzzProps {
  buzz: BuzzObject;
}
export interface BuzzObject {
  category: string;
  likes: number;
  comments: number[];
  author: string;
  text: string;
  date: string;
  id: string;
}

export interface BuzzsArrayProps {
  buzzs: BuzzObject[];
}
