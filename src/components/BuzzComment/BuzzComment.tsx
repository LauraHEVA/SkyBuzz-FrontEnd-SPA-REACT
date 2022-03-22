import { BuzzCommentProps, BuzzProps } from "../../types/buzzInterfaces";
import {
  ListItem,
  ListUlHorizontal,
} from "../../styles/globalStyledComponents";

import CommentIcon from "../CommentIcon/CommentIcon";
import HeartIcon from "../HeartIcon/HeartIcon";
import TrashIcon from "../TrashIcon/TrashIcon";
import {
  ContainerSuperior,
  MessageContainer,
  ProfileCircle,
  ProfileContainer,
  TextAuthor,
  TextBuzz,
  TextTopic,
  TextTimeAgo,
  NumDataIcons,
  BuzzCardContainer,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../types/userInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const BuzzComment = ({
  buzz,
  onClickTrash,
  onClickHeart,
}: BuzzCommentProps | BuzzProps): JSX.Element => {
  const user: UserData = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const viewDetailBuzz = () => {
    navigate(`/buzz/${buzz.id}`);
  };

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
            {user.loggedIn ? (
              <>
                <ListItem>
                  <NumDataIcons>{buzz.likes}</NumDataIcons>
                  <HeartIcon onClick={onClickHeart} />
                </ListItem>
                <ListItem>
                  <TrashIcon onClick={onClickTrash} />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem>
                  <NumDataIcons>{buzz.likes}</NumDataIcons>
                  <HeartIcon />
                </ListItem>
              </>
            )}
          </ListUlHorizontal>
        </MessageContainer>
      </BuzzCardContainer>
    </>
  );
};

export default BuzzComment;