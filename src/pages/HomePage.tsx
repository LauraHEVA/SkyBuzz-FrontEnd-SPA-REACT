import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import { BuzzObject } from "../types/buzzInterfaces";
import {
  ContainerFooter,
  ContainerHeader,
  ContainerListBuzzs,
  ListItem,
  ListUlVert,
} from "../styles/globalStyledComponents";
import ButtonGeneric from "../components/Buttons/ButtonGeneric";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";

const HomePage = () => {
  const dispatch = useDispatch();
  const buzzsList = useSelector((state: RootState) => state.buzzs);

  useEffect(() => {
    dispatch(loadAllBuzzsThunk);
  }, [dispatch]);

  const navigate = useNavigate();

  const goToNewBuzz = () => {
    navigate(`/newbuzz`);
  };

  return (
    <>
      <ContainerHeader>
        <Header title="Buzzs" />
      </ContainerHeader>
      <div>
        <h3>Menu desplegable categorias</h3>
      </div>

      <ContainerListBuzzs>
        <ListUlVert>
          {buzzsList.map((buzz: BuzzObject) => {
            return (
              <ListItem key={buzz.id}>
                <Buzz buzz={buzz} />
              </ListItem>
            );
          })}
        </ListUlVert>
        <ButtonPrimary
          actionOnClick={() => goToNewBuzz()}
          className={"btn-primary"}
          text={"New Buzz"}
        />
      </ContainerListBuzzs>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </>
  );
};

export default HomePage;
