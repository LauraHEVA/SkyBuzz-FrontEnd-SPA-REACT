import { UserCardProps } from "../../types/userInterfaces";

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <>
      <p>Hello World</p>
      <p>{user.name}</p>
    </>
  );
};

export default UserCard;
