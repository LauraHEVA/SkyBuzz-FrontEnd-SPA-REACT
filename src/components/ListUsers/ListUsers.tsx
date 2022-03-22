import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { ListItem } from "../../styles/globalStyledComponents";
import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner";
import ArrowPages from "../ArrowPages/ArrowPages";
import { UserData } from "../../types/userInterfaces";
import UserCard from "../UserCard/UserCard";
import { loadAllUsersThunk } from "../../redux/thunks/usersThunk";

const ListUsers = (): JSX.Element => {
  const dispatch = useDispatch();
  const usersList: UserData[] = useSelector((state: RootState) => state.users);

  const usersPerPage = 10;
  const pages = [];
  const numPages = Math.ceil(usersList.length / usersPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  if (usersList.length > usersPerPage) {
    let currentOffset = 0;

    for (let i = 0; i < numPages; i++) {
      const pageUsers = usersList.slice(
        currentOffset,
        currentOffset + usersPerPage
      );
      pages.push(pageUsers);
      currentOffset += usersPerPage;
    }
  } else {
    pages.push(usersList);
  }

  const changePage = (mode: boolean) => {
    if (mode) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(loadAllUsersThunk);
  }, [dispatch]);

  return (
    <>
      {numPages > 1 && (
        <ArrowsContainer data-testid="arrowsContainer">
          <ArrowPages
            disabled={currentPage === 0}
            actionOnClick={() => {
              changePage(false);
            }}
            showSide={true}
          />
          <ArrowPages
            disabled={currentPage === numPages - 1}
            actionOnClick={() => {
              changePage(true);
            }}
            showSide={false}
          />
        </ArrowsContainer>
      )}

      {usersList.length > 0 ? (
        <ListUlUsers>
          {pages[currentPage].map((user) => {
            return (
              <ListItem key={user.id}>
                <UserCard user={user} />
              </ListItem>
            );
          })}
        </ListUlUsers>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const ListUlUsers = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
`;

const ArrowsContainer = styled.div`
  padding-top: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`;

export default ListUsers;
