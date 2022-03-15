import {
  ActionWithIdInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";

const oneBuzzReducer = (
  currentBuzz: BuzzBasic = { topic: "", text: "", author: "" },
  action: SomeActionInterface | ActionWithIdInterface = {
    type: "",
  }
) => {
  let newBuzz: BuzzBasic;

  switch (action.type) {
    case actionsType.incrementLikes:
      newBuzz = currentBuzz;
      break;

    default:
      newBuzz = currentBuzz;
  }

  return newBuzz;
};

export default oneBuzzReducer;
