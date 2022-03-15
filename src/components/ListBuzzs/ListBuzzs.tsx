import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import {
  deleteBuzzThunk,
  incrementLikesThunk,
  loadAllBuzzsThunk,
} from "../../redux/thunks/buzzsThunk";
import { BuzzObject } from "../../types/buzzInterfaces";
import { ListItem, ListUlVert } from "../../styles/globalStyledComponents";
import Buzz from "../Buzz/Buzz";
import { toast } from "react-toastify";

const ListBuzzs = (): JSX.Element => {
  const dispatch = useDispatch();
  const buzzsList: BuzzObject[] = useSelector(
    (state: RootState) => state.buzzs
  );

  useEffect(() => {
    dispatch(loadAllBuzzsThunk);
  }, [dispatch]);

  const deleteBuzz = (id: string) => {
    dispatch(deleteBuzzThunk(id));
  };

  const addLikeBuzz = (id: string) => {
    dispatch(incrementLikesThunk(id));
  };
  return (
    <ListUlVert>
      {buzzsList.map((buzz) => {
        return (
          <ListItem key={buzz.id}>
            <Buzz
              buzz={buzz}
              onClickTrash={() => {
                deleteBuzz(buzz.id);
                toast.success("Buzz deleted correctly");
              }}
              onClickHeart={() => {
                addLikeBuzz(buzz.id);
                toast.success("Like saved correctly");
              }}
            />
          </ListItem>
        );
      })}
    </ListUlVert>
  );
};

export default ListBuzzs;
