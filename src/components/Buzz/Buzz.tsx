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
  MainContainer,
  MessageContainer,
  ProfileCircle,
  ProfileContainer,
  TextAuthor,
  TextBuzz,
  TextCategory,
  TextTimeAgo,
} from "../../styles/buzzComponentStyles";
import ReactTimeAgo from "react-time-ago";

const Buzz = ({ buzz, onClick }: BuzzProps): JSX.Element => {
  return (
    <>
      <MainContainer>
        <ProfileContainer>
          <ProfileCircle>
            <span>{buzz.author.substring(0, 2).toUpperCase()}</span>
          </ProfileCircle>
        </ProfileContainer>
        <MessageContainer>
          <ContainerSuperior>
            <TextAuthor>{buzz.author}</TextAuthor>
            <TextTimeAgo>
              <ReactTimeAgo date={Date.parse(buzz.date)} locale="en-US" />
            </TextTimeAgo>
          </ContainerSuperior>
          <TextBuzz>{buzz.text}</TextBuzz>
          <TextCategory>#{buzz.category}</TextCategory>
          <ListUlHorizontal>
            <ListItem>
              <CommentIcon />
            </ListItem>
            <ListItem>
              <HeartIcon />
            </ListItem>
            <ListItem>
              <TrashIcon onClick={onClick} />
            </ListItem>
          </ListUlHorizontal>
        </MessageContainer>
      </MainContainer>
    </>
  );
};

export default Buzz;
