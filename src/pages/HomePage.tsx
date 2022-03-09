import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { loadAllBuzzsThunk } from "../redux/thunks/buzzsThunk";
import { BuzzObject } from "../types/buzzInterfaces";

// const buzz = {
//   category: "general",
//   likes: 0,
//   comments: [1],
//   author: "Madonna",
//   text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
//   date: "2022-03-08T19:21:30.764Z",
//   id: "324k2l",
// };

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
            <li>
              <Buzz buzz={buzz} />
            </li>
          );
        })}
      </ul>

      <Footer />
    </>
  );
};

export default HomePage;
