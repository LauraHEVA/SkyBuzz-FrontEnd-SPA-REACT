import styled from "styled-components";

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

const ListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Buzz = ({ buzz }: BuzzProps): JSX.Element => {
  return (
    <>
      <p>{buzz.author}</p>
      <p>{buzz.text}</p>
      <p>#{buzz.category}</p>
      <div>
        <ListUl>
          <ListItem>1h</ListItem>
          <ListItem>icono comment</ListItem>
          <ListItem>heart</ListItem>
        </ListUl>
      </div>
    </>
  );
};

export default Buzz;
