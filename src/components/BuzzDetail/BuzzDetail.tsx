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
  TextAuthor,
  TextTopic,
  TextTimeAgo,
  NumDataIcons,
  BuzzCardContainer,
  TextBuzzDetail,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";

const BuzzDetail = ({
  buzz,
  onClickTrash,
  onClickHeart,
}: BuzzProps): JSX.Element => {
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
          <TextBuzzDetail>{buzz.text}</TextBuzzDetail>
          <TextTopic>#{buzz.topic}</TextTopic>
          <ListUlHorizontal>
            <ListItem>
              <NumDataIcons>{buzz.comments.length}</NumDataIcons>
              <CommentIcon />
            </ListItem>
            <ListItem>
              <NumDataIcons>{buzz.likes}</NumDataIcons>
              <HeartIcon onClick={onClickHeart} />
            </ListItem>
            <ListItem>
              <TrashIcon onClick={onClickTrash} />
            </ListItem>
          </ListUlHorizontal>
        </MessageContainer>
      </BuzzCardContainer>
    </>
  );
};

export default BuzzDetail;
