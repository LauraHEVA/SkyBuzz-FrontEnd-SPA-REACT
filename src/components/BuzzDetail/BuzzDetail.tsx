import { BuzzProps } from "../../types/buzzInterfaces";
import {
  ContainerUserNames,
  ListItem,
} from "../../styles/globalStyledComponents";
import {
  MessageContainer,
  ProfileCircle,
  ProfileContainer,
  TextAuthor,
  TextTopic,
  TextTimeAgo,
  TextBuzzDetail,
  TextAuthorNormal,
  TextAuthorDetail,
  TextAuthorNormalDetail,
  TextTopicDetail,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { breakpointXS, greyLight } from "../../styles/globalStyles";
import BuzzComment from "../BuzzComment/BuzzComment";
import { loadDetailBuzzThunk } from "../../redux/thunks/buzzsThunk";
import { useEffect } from "react";
import BuzzInfoBottom from "../BuzzInfoBottom/BuzzInfoBottom";

const BuzzDetail = ({
  buzz,
  onClickTrash,
  onClickHeart,
}: BuzzProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetailBuzzThunk);
  }, [dispatch]);
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
                <TextAuthorDetail>{buzz.author.name}</TextAuthorDetail>
                <TextAuthorNormalDetail>
                  @{buzz.author.username}
                </TextAuthorNormalDetail>
              </ContainerUserNames>
            </PictureAndNamesContainer>
            <TextTimeAgo>
              <ReactTimeAgo date={Date.parse(buzz.date)} locale="en-US" />
            </TextTimeAgo>
          </AuthorAndTimeContainer>
        </InfoAuthorContainer>
        <MessageContainer>
          <TextBuzzDetail>{buzz.text}</TextBuzzDetail>
          <TextTopicDetail>#{buzz.topic}</TextTopicDetail>
          <BuzzInfoBottom
            buzz={buzz}
            onClickHeart={onClickHeart}
            onClickTrash={onClickTrash}
          />
        </MessageContainer>
      </BuzzCardDetailContainer>
      {buzz.comments.length ? (
        <div>
          <ListUlBuzzs>
            {buzz.comments.map((comment) => {
              return (
                <ListItem key={comment.id}>
                  <BuzzComment key={comment.id} buzz={comment}></BuzzComment>
                </ListItem>
              );
            })}
          </ListUlBuzzs>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

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

const ListUlBuzzs = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
`;

export default BuzzDetail;
