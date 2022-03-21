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
  TextBuzzDetail,
  BuzzCardContainer,
  TextBuzz,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import EditIcon from "../EditIcon/EditIcon";
import { UserData } from "../../types/userInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import { breakpointXS, greyLight } from "../../styles/globalStyles";

const BuzzDetail = ({
  buzz,
  onClickTrash,
  onClickHeart,
}: BuzzProps): JSX.Element => {
  const user: UserData = useSelector((state: RootState) => state.user);

  return (
    <>
      <BuzzCardDetailContainer>
        <InfoAuthorContainer>
          <AuthorAndTimeContainer>
            <PictureAndNamesContainer>
              <ProfileContainer>
                <ProfileCircle>
                  <span>{buzz.author.name.substring(0, 2).toUpperCase()}</span>
                </ProfileCircle>
              </ProfileContainer>
              <ContainerUserNames>
                <TextAuthor>{buzz.author.name}</TextAuthor>
                <TextAuthor>@{buzz.author.username}</TextAuthor>
              </ContainerUserNames>
            </PictureAndNamesContainer>
            <TextTimeAgo>
              <ReactTimeAgo date={Date.parse(buzz.date)} locale="en-US" />
            </TextTimeAgo>
          </AuthorAndTimeContainer>
        </InfoAuthorContainer>
        <MessageContainer>
          <TextBuzzDetail>{buzz.text}</TextBuzzDetail>

          <ContainerSuperior></ContainerSuperior>
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
      </BuzzCardDetailContainer>
      <div>
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
            <TextBuzz>{buzz.text}</TextBuzz>
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
      </div>
    </>
  );
};

const ContainerUserNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`;

const PictureAndNamesContainer = styled.div`
  display: flex;
`;

const AuthorAndTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InfoAuthorContainer = styled.div`
  display: flex;
`;

const BuzzCardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${greyLight};
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: ${breakpointXS}) {
    max-width: 500px;
  }
`;

export default BuzzDetail;
