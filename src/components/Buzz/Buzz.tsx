import styled from "styled-components";
import { ListItem, ListUl } from "../../styles/globalStyledComponents";
import { grey, primary } from "../../styles/globalStyles";
import CommentIcon from "../CommentIcon/CommentIcon";
import HeartIcon from "../HeartIcon/HeartIcon";

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

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProfileContainer = styled.div``;

const ProfileCircle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextAuthor = styled.p`
  color: ${primary};
  font-weight: 900;
  font-size: 14px;
  text-shadow: 0 3px 3px ${grey};
  margin-top: 0;
`;

const TextBuzz = styled.p`
  color: ${primary};
  font-size: 14px;
`;

const TextCategory = styled.p`
  color: ${primary};
  font-weight: 900;
  font-size: 12px;
`;

const TextTimeAgo = styled.span`
  color: ${primary};
  font-size: 14px;
`;

const Buzz = ({ buzz }: BuzzProps): JSX.Element => {
  return (
    <>
      <MainContainer>
        <ProfileContainer>
          <ProfileCircle>
            {buzz.author.substring(0, 2).toUpperCase()}
          </ProfileCircle>
        </ProfileContainer>

        <div>
          <TextAuthor>{buzz.author}</TextAuthor>
          <TextBuzz>{buzz.text}</TextBuzz>
          <TextCategory>#{buzz.category}</TextCategory>

          <ListUl>
            <ListItem>
              <TextTimeAgo>1h</TextTimeAgo>
            </ListItem>
            <ListItem>
              <CommentIcon />
            </ListItem>
            <ListItem>
              <HeartIcon />
            </ListItem>
          </ListUl>
        </div>
      </MainContainer>
    </>
  );
};

export default Buzz;
