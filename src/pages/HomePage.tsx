import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { deleteBuzzThunk, loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import {
  ContainerFooter,
  ContainerHeader,
  ContainerListBuzzs,
  ListItem,
  ListUlVert,
} from "../styles/globalStyledComponents";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import styled from "styled-components";

const ButtonContainerNewBuzz = styled.div`
  position: fixed;
  bottom: 70px;
  right: 15px;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const buzzsList = useSelector((state: RootState) => state.buzzs);

  useEffect(() => {
    dispatch(loadAllBuzzsThunk);
  }, [dispatch]);

  const deleteBuzz = (id: string) => {
    dispatch(deleteBuzzThunk(id));
  };

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
          {buzzsList.map((buzz) => {
            return (
              <ListItem key={buzz.id}>
                <Buzz buzz={buzz} onClick={() => deleteBuzz(buzz.id)} />
              </ListItem>
            );
          })}
        </ListUlVert>
        <ButtonContainerNewBuzz>
          <ButtonPrimary
            actionOnClick={() => goToNewBuzz()}
            className={"btn-primary"}
            text={"New Buzz"}
          />
        </ButtonContainerNewBuzz>
      </ContainerListBuzzs>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </>
  );
};

export default HomePage;
