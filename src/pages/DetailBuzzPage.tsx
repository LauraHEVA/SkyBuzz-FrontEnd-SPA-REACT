import {
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Toastr from "../components/Toastr/Toastr";
import { BuzzBasic, BuzzObject } from "../types/buzzInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import {
  deleteBuzzThunk,
  incrementLikesThunk,
  loadDetailBuzzThunk,
} from "../redux/thunks/buzzsThunk";
import Buzz from "../components/Buzz/Buzz";
import { toast } from "react-toastify";
import { cleanBuzzDetailAction } from "../redux/actions/actionsCreator";
import { Spinner } from "../components/Spinner/Spinner";

const DetailBuzzPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const dispatch = useDispatch();

  const buzzDetail: BuzzBasic | BuzzObject = useSelector(
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
            <Buzz
              buzz={buzzDetail}
              onClickTrash={() => {
                deleteBuzz();
                toast.success("Buzz deleted correctly");
                setTimeout(goToHomePage, 2000);
              }}
              onClickHeart={() => {
                addLikeBuzz();
              }}
            />
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
