import {
  AddNewBuzzActionInterface,
  ActionWithIdInterface,
  LoadAllBuzsActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";

import actionsType from "../actions/actionsType";

const buzzsReducer = (
  currentBuzzs: BuzzObject[] = [],
  action:
    | SomeActionInterface
    | LoadAllBuzsActionInterface
    | ActionWithIdInterface
    | AddNewBuzzActionInterface = {
    type: "",
  }
) => {
  let newBuzzsList: BuzzObject[] | BuzzBasic[];

  switch (action.type) {
    case actionsType.loadAllBuzzs:
      newBuzzsList = [...(action as LoadAllBuzsActionInterface).buzzs];
      break;

    case actionsType.deleteBuzz:
      newBuzzsList = currentBuzzs.filter(
        (buzz) => buzz.id !== (action as ActionWithIdInterface).id
      );
      break;

    case actionsType.addBuzz:
      newBuzzsList = [
        ...currentBuzzs,
        (action as AddNewBuzzActionInterface).buzz,
      ];
      break;

    default:
      newBuzzsList = [...currentBuzzs];
      break;
  }
  return newBuzzsList;
};

export default buzzsReducer;
