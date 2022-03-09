import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import { BuzzObject } from "../types/buzzInterfaces";
import {
  ContainerListBuzzs,
  ListItem,
  ListUlVert,
} from "../styles/globalStyledComponents";

const HomePage = () => {
  const dispatch = useDispatch();
  const buzzsList = useSelector((state: RootState) => state.buzzs);

  useEffect(() => {
    dispatch(loadAllBuzzsThunk);
  }, [dispatch]);

  return (
    <>
      <Header title="Buzzs" />
      <h2>List of messages here</h2>
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
      </ContainerListBuzzs>
      <Footer />
    </>
  );
};

export default HomePage;
