import {
  ActionWithIdInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";

const oneBuzzReducer = (
  currentBuzz: BuzzBasic | BuzzObject = { topic: "", text: "", author: "" },
  action: SomeActionInterface | ActionWithIdInterface = {
    type: "",
  }
) => {
  let newBuzz: BuzzBasic;

  switch (action.type) {
    case actionsType.incrementLikes:
      newBuzz = { ...currentBuzz };
      (newBuzz as BuzzObject).likes += 1;
      break;

    case actionsType.loadDetailBuzz:
      newBuzz = { ...currentBuzz };
      break;

    default:
      newBuzz = { ...currentBuzz };
  }

  return newBuzz;
};

export default oneBuzzReducer;
