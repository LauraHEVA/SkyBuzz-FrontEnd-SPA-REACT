import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import { BuzzObject } from "../types/buzzInterfaces";
import { ListItem } from "../styles/globalStyledComponents";

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
      <ul>
        {buzzsList.map((buzz: BuzzObject) => {
          return (
            <ListItem key={buzz.id}>
              <Buzz buzz={buzz} />
            </ListItem>
          );
        })}
      </ul>

      <Footer />
    </>
  );
};

export default HomePage;
