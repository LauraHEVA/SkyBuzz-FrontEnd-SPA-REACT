import {
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Toastr from "../components/Toastr/Toastr";
import { BuzzObject } from "../types/buzzInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import {
  deleteBuzzThunk,
  incrementLikesThunk,
  loadDetailBuzzThunk,
} from "../redux/thunks/buzzsThunk";
import { cleanBuzzDetailAction } from "../redux/actions/actionsCreator";
import { Spinner } from "../components/Spinner/Spinner";
import BuzzDetail from "../components/BuzzDetail/BuzzDetail";
import FormComment from "../components/FormComment/FormComment";

const DetailBuzzPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const dispatch = useDispatch();

  const buzzDetail: BuzzObject = useSelector(
    (state: RootState) => state.oneBuzz
  );

  useEffect(() => {
    const cleanUp = () => {
      dispatch(cleanBuzzDetailAction());
    };
    dispatch(loadDetailBuzzThunk(id as string));
    return cleanUp;
  }, [dispatch, id]);

  const deleteBuzz = () => {
    dispatch(deleteBuzzThunk(id as string));
  };

  const addLikeBuzz = () => {
    dispatch(incrementLikesThunk(id as string));
  };

  return (
    <>
      {buzzDetail.text !== "" ? (
        <>
          <Toastr />
          <MainContainerPage>
            <BuzzDetail
              buzz={buzzDetail}
              onClickTrash={() => {
                deleteBuzz();
                setTimeout(goToHomePage, 500);
              }}
              onClickHeart={() => {
                addLikeBuzz();
              }}
            />
            <FormComment />
            <ButtonContainerNewBuzz>
              <ButtonPrimary
                actionOnClick={() => {
                  goToHomePage();
                }}
                className={"btn-primary"}
                text={"Go Back"}
              />
            </ButtonContainerNewBuzz>
          </MainContainerPage>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default DetailBuzzPage;
