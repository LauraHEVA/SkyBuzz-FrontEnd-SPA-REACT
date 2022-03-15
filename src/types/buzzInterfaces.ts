export interface BuzzBasic {
  topic: string;
  text: string;
  author: string;
}

export interface BuzzProps {
  buzz: BuzzObject;
  onClickTrash: React.MouseEventHandler;
  onClickHeart: React.MouseEventHandler;
}
export interface BuzzObject extends BuzzBasic {
  likes: number;
  comments: number[];
  date: string;
  id: string;
}
