import styled from "styled-components";
import {
  ProfileCircle,
  ProfileContainer,
  TextAuthor,
  TextAuthorNormal,
} from "../../styles/buzzComponentStyles";
import {
  ContainerFollowersData,
  ContainerUserNames,
} from "../../styles/globalStyledComponents";
import { greyLight } from "../../styles/globalStyles";
import { UserCardProps } from "../../types/userInterfaces";

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <>
      <CardUserContainer>
        <ProfileContainer>
          <ProfileCircle>
            <span>{user.name.substring(0, 2).toUpperCase()}</span>
          </ProfileCircle>
        </ProfileContainer>
        <InfoUserContainer>
          <ContainerUserNames>
            <TextAuthor>{user.name}</TextAuthor>
            <TextAuthorNormal>@{user.username}</TextAuthorNormal>
          </ContainerUserNames>
          <ContainerFollowersData>
            <TextAuthor>3 Followers</TextAuthor>
            <TextAuthorNormal>Add</TextAuthorNormal>
          </ContainerFollowersData>
        </InfoUserContainer>
      </CardUserContainer>
    </>
  );
};

const CardUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 50vw;
  max-width: 500px;
  border-bottom: 1px solid ${greyLight};
  margin-bottom: 20px;
`;

const InfoUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export default UserCard;
