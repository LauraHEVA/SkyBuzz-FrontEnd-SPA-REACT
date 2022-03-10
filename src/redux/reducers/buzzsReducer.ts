import {
  DeleteBuzzActionInterface,
  LoadAllBuzsActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzObject } from "../../types/buzzInterfaces";

import actionsType from "../actions/actionsType";

const buzzsReducer = (
  currentBuzzs: BuzzObject[] = [],
  action:
    | SomeActionInterface
    | LoadAllBuzsActionInterface
    | DeleteBuzzActionInterface = {
    type: "",
  }
) => {
  let newBuzzsList: BuzzObject[];

  switch (action.type) {
    case actionsType.loadAllBuzzs:
      newBuzzsList = [...(action as LoadAllBuzsActionInterface).buzzs];
      break;

    case actionsType.deleteBuzz:
      newBuzzsList = currentBuzzs.filter(
        (buzz) => buzz.id !== (action as DeleteBuzzActionInterface).id
      );
      break;

    default:
      newBuzzsList = [...currentBuzzs];
      break;
  }
  return newBuzzsList;
};

export default buzzsReducer;
