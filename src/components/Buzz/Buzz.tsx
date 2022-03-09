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
      <p>{buzz.text}</p>
      <p>#{buzz.category}</p>
      <div>
        <ul>
          <li>1h</li>
          <li>icono comment</li>
          <li>heart</li>
        </ul>
      </div>
    </>
  );
};

export default Buzz;
