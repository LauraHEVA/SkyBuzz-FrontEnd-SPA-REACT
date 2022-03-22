import UserCard from "../components/UserCard/UserCard";

const ListUsersPage = () => {
  const user = {
    name: "Marc",
    username: "Marc0",
    id: "623245decaa7d69f96f10a95",
  };
  return (
    <>
      <UserCard user={user} />
      <UserCard user={user} />
      <UserCard user={user} />
      <UserCard user={user} />
    </>
  );
};

export default ListUsersPage;
