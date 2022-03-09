interface BuzzProps {
  buzz: BuzzObject;
}
interface BuzzObject {
  category: string;
  likes: number;
  comments: number[];
  author: string;
  text: string;
  date: string;
  id: string;
}

const Buzz = ({ buzz }: BuzzProps): JSX.Element => {
  return (
    <>
      <p>{buzz.author}</p>
      <p>Buzz</p>
    </>
  );
};

export default Buzz;
