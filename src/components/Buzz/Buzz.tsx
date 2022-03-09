import styled from "styled-components";
import { BuzzProps } from "../../interfaces/buzzInterfaces";
import { ListItem, ListUl } from "../../styles/globalStyledComponents";
import { grey, greyLight, primary } from "../../styles/globalStyles";
import CommentIcon from "../CommentIcon/CommentIcon";
import HeartIcon from "../HeartIcon/HeartIcon";

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${greyLight};
  margin-bottom: 7px;
`;

const ProfileContainer = styled.div`
  padding: 8px;
`;

const ProfileCircle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  padding-left: 8px;
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
            <span>{buzz.author.substring(0, 2).toUpperCase()}</span>
          </ProfileCircle>
        </ProfileContainer>

        <MessageContainer>
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
        </MessageContainer>
      </MainContainer>
    </>
  );
};

export default Buzz;
