import { BuzzProps } from "../../types/buzzInterfaces";
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
  TextBuzz,
  TextTopic,
  TextTimeAgo,
  NumDataIcons,
  BuzzCardContainer,
  TextAuthorInLine,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router-dom";
import EditIcon from "../EditIcon/EditIcon";
import { UserData } from "../../types/userInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Buzz = ({ buzz, onClickTrash, onClickHeart }: BuzzProps): JSX.Element => {
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
            <TextAuthorInLine>{buzz.author.name}</TextAuthorInLine>
            <TextAuthorInLine>@{buzz.author.username}</TextAuthorInLine>
            <TextTimeAgo>
              <ReactTimeAgo date={Date.parse(buzz.date)} locale="en-US" />
            </TextTimeAgo>
          </ContainerSuperior>
          <TextBuzz onClick={viewDetailBuzz}>{buzz.text}</TextBuzz>
          <TextTopic>#{buzz.topic}</TextTopic>
          <ListUlHorizontal>
            <ListItem>
              <NumDataIcons>{buzz.comments.length}</NumDataIcons>
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
                <ListItem>
                  <EditIcon />
                </ListItem>
              </>
            ) : (
              <></>
            )}
          </ListUlHorizontal>
        </MessageContainer>
      </BuzzCardContainer>
    </>
  );
};

export default Buzz;
