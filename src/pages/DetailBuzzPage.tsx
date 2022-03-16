import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";

import {
  ContainerNavMenu,
  ContainerHeader,
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Toastr from "../components/Toastr/Toastr";
import Footer from "../components/Footer/Footer";
import { BuzzObject } from "../types/buzzInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import {
  deleteBuzzThunk,
  incrementLikesThunk,
} from "../redux/thunks/buzzsThunk";
import Buzz from "../components/Buzz/Buzz";
import { toast } from "react-toastify";

const DetailBuzzPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const dispatch = useDispatch();

  // const buzzDetail: BuzzObject = useSelector(
  //   (state: RootState) => state.oneBuzz
  // );

  const buzzDetail = {
    author: "Tony Curtis",
    text: "- I'm a man! ...  - Well, nobody's perfect.",
    topic: "SomeLikeItHot",
    date: "2022-03-13T23:23:27.981Z",
    likes: 19,
    comments: [],
    id: "622e7cefb077ebdf25a44af8",
  };

  useEffect(() => {
    dispatch(incrementLikesThunk);
  }, [dispatch]);

  const deleteBuzz = (id: string) => {
    dispatch(deleteBuzzThunk(id));
  };

  const addLikeBuzz = (id: string) => {
    dispatch(incrementLikesThunk(id));
  };

  return (
    <>
      <ContainerHeader>
        <Header title="Buzz Detail" />
      </ContainerHeader>
      <Toastr />
      <MainContainerPage>
        <p>Detail message here</p>
        <Buzz
          buzz={buzzDetail}
          onClickTrash={() => {
            deleteBuzz(buzzDetail.id);
            toast.success("Buzz deleted correctly");
          }}
          onClickHeart={() => {
            addLikeBuzz(buzzDetail.id);
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
  );
};

export default DetailBuzzPage;
