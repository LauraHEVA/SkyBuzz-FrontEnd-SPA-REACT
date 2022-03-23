import { BuzzCommentProps, BuzzProps } from "../../types/buzzInterfaces";
import {
  ListItem,
  ListUlHorizontal,
} from "../../styles/globalStyledComponents";
import CommentIcon from "../CommentIcon/CommentIcon";
import {
  ContainerSuperior,
  MessageContainer,
  ProfileCircle,
  ProfileContainer,
  TextAuthor,
  TextBuzz,
  TextTopic,
  TextTimeAgo,
  BuzzCardContainer,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router-dom";

const BuzzComment = ({ buzz }: BuzzCommentProps | BuzzProps): JSX.Element => {
  const navigate = useNavigate();

  const viewDetailBuzz = () => {
    navigate(`/buzz/${buzz.id}`);
  };
  console.log(buzz);
  return (
    <>
      <BuzzCardContainer>
        <ProfileContainer>
          <ProfileCircle>
            <span>{buzz.author.name.substring(0, 2).toUpperCase()}</span>
          </ProfileCircle>
        </ProfileContainer>
        <MessageContainer>
          <ContainerSuperior>
            <TextAuthor>{buzz.author.name}</TextAuthor>
            <TextTimeAgo>
              <ReactTimeAgo date={Date.parse(buzz.date)} locale="en-US" />
            </TextTimeAgo>
          </ContainerSuperior>
          <TextBuzz onClick={viewDetailBuzz}>{buzz.text}</TextBuzz>
          <TextTopic>#{buzz.topic}</TextTopic>
          <ListUlHorizontal>
            <ListItem>
              <CommentIcon />
            </ListItem>
          </ListUlHorizontal>
        </MessageContainer>
      </BuzzCardContainer>
    </>
  );
};

export default BuzzComment;
