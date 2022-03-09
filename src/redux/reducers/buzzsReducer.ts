import {
  BuzzObject,
  LoadAllBuzsActionInterface,
} from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";

const buzzsReducer = (
  currentBuzzs: BuzzObject[] = [],
  action: LoadAllBuzsActionInterface = { type: "", buzzs: [] }
) => {
  let newBuzzsList: BuzzObject[];

  switch (action.type) {
    case actionsType.loadAllBuzzs:
      newBuzzsList = [...action.buzzs];
      break;

    default:
      newBuzzsList = [...currentBuzzs];
      break;
  }
  return newBuzzsList;
};

export default buzzsReducer;
