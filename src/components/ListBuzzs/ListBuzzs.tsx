import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  deleteBuzzThunk,
  incrementLikesThunk,
  loadAllBuzzsThunk,
} from "../../redux/thunks/buzzsThunk";
import { BuzzObject } from "../../types/buzzInterfaces";
import { ListItem } from "../../styles/globalStyledComponents";
import Buzz from "../Buzz/Buzz";
import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner";
import ArrowPages from "../ArrowPages/ArrowPages";

const ListBuzzs = (): JSX.Element => {
  const dispatch = useDispatch();
  const buzzsList: BuzzObject[] = useSelector(
    (state: RootState) => state.buzzs
  );
  const buzzsPerPage = 20;
  const pages = [];
  const numPages = Math.ceil(buzzsList.length / buzzsPerPage);
  const arrayAllBuzzs = [...buzzsList.reverse()];
  const [currentPage, setCurrentPage] = useState(0);

  if (arrayAllBuzzs.length > buzzsPerPage) {
    let currentOffset = 0;

    for (let i = 0; i < numPages; i++) {
      const pageBuzzs = arrayAllBuzzs.slice(
        currentOffset,
        currentOffset + buzzsPerPage
      );
      pages.push(pageBuzzs);
      currentOffset += buzzsPerPage;
    }
  } else {
    pages.push(arrayAllBuzzs);
  }
  console.log(pages);
  console.log(currentPage);
  const changePage = (mode: boolean) => {
    if (mode) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(loadAllBuzzsThunk);
  }, [dispatch]);

  const deleteBuzz = (id: string) => {
    dispatch(deleteBuzzThunk(id));
  };

  const addLikeBuzz = (id: string) => {
    dispatch(incrementLikesThunk(id));
  };
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

      {buzzsList.length > 0 ? (
        <ListUlBuzzs>
          {pages[currentPage].map((buzz) => {
            return (
              <ListItem key={buzz.id}>
                <Buzz
                  buzz={buzz}
                  onClickTrash={() => {
                    deleteBuzz(buzz.id);
                  }}
                  onClickHeart={() => {
                    addLikeBuzz(buzz.id);
                  }}
                />
              </ListItem>
            );
          })}
        </ListUlBuzzs>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const ListUlBuzzs = styled.ul`
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

export default ListBuzzs;
