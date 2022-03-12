import Buzz from "../components/Buzz/Buzz";
import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { deleteBuzzThunk, loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import {
  ContainerNavMenu,
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
  bottom: 50px;
  right: 15px;
  z-index: 2;
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
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
    </>
  );
};

export default HomePage;
