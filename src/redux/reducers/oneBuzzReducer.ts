import {
  CommentBuzzActionInterface,
  LoadOneBuzzActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";

const oneBuzzReducer = (
  currentBuzz: BuzzObject = {
    topic: "",
    text: "",
    author: {
      name: "",
      username: "",
      id: "",
    },
    date: "",
    likes: 0,
    comments: [],
    id: "",
  },
  action:
    | SomeActionInterface
    | LoadOneBuzzActionInterface
    | CommentBuzzActionInterface = {
    type: "",
    buzz: {
      topic: "",
      text: "",
      author: {
        name: "",
        username: "",
        id: "",
      },
      date: "",
      likes: 0,
      comments: [],
      id: "",
    },
  }
) => {
  let newBuzz: BuzzObject;

  switch (action.type) {
    case actionsType.loadDetailBuzz:
      newBuzz = { ...(action as LoadOneBuzzActionInterface).buzz };
      break;

    case actionsType.cleanBuzzDetail:
      newBuzz = {
        topic: "",
        text: "",
        author: {
          name: "",
          username: "",
          id: "",
        },
        date: "",
        likes: 0,
        comments: [],
        id: "",
      };
      break;

    case actionsType.incrementLikes:
      newBuzz = { ...currentBuzz };
      newBuzz.likes += 1;
      break;

    case actionsType.commentBuzz:
      newBuzz = { ...currentBuzz };
      currentBuzz.comments.push(
        (action as CommentBuzzActionInterface).buzzComment
      );
      break;

    default:
      newBuzz = { ...currentBuzz };
  }

  return newBuzz;
};

export default oneBuzzReducer;
