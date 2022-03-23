import { BuzzProps } from "../../types/buzzInterfaces";
import {
  ContainerSuperior,
  MessageContainer,
  ProfileCircle,
  ProfileContainer,
  TextBuzz,
  TextTopic,
  TextTimeAgo,
  BuzzCardContainer,
  TextAuthorInLine,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router-dom";
import BuzzInfoBottom from "../BuzzInfoBottom/BuzzInfoBottom";

const Buzz = ({ buzz, onClickTrash, onClickHeart }: BuzzProps): JSX.Element => {
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
          <TextBuzz data-testid="buzz-text" onClick={viewDetailBuzz}>
            {buzz.text}
          </TextBuzz>
          <TextTopic>#{buzz.topic}</TextTopic>
          <BuzzInfoBottom
            buzz={buzz}
            onClickHeart={onClickHeart}
            onClickTrash={onClickTrash}
          />
        </MessageContainer>
      </BuzzCardContainer>
    </>
  );
};

export default Buzz;
