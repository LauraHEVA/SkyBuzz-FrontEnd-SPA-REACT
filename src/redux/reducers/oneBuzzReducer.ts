import {
  LoadOneBuzzActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";

const oneBuzzReducer = (
  currentBuzz: BuzzBasic | BuzzObject = {
    topic: "",
    text: "",
    author: "",
    date: "",
    likes: 0,
    comments: [],
    id: "",
  },
  action: SomeActionInterface | LoadOneBuzzActionInterface = {
    type: "",
    buzz: {
      topic: "",
      text: "",
      author: "",
      date: "",
      likes: 0,
      comments: [],
      id: "",
    },
  }
) => {
  let newBuzz: BuzzBasic;

  switch (action.type) {
    case actionsType.loadDetailBuzz:
      newBuzz = { ...(action as LoadOneBuzzActionInterface).buzz };
      break;

    case actionsType.cleanBuzzDetail:
      newBuzz = {
        topic: "",
        text: "",
        author: "",
      };
      break;

    case actionsType.incrementLikes:
      newBuzz = { ...currentBuzz };
      (newBuzz as BuzzObject).likes += 1;
      break;

    default:
      newBuzz = { ...currentBuzz };
  }

  return newBuzz;
};

export default oneBuzzReducer;
