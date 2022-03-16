import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";
import {
  ContainerNavMenu,
  ContainerHeader,
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Toastr from "../components/Toastr/Toastr";
import Footer from "../components/Footer/Footer";
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
import NotFoundPage from "./NotFoundPage";

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
    dispatch(loadDetailBuzzThunk(id as string));
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
          <ContainerHeader>
            <Header title="Buzz Detail" />
          </ContainerHeader>
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
          <ContainerNavMenu>
            <NavMenu />
          </ContainerNavMenu>
          <Footer />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default DetailBuzzPage;
