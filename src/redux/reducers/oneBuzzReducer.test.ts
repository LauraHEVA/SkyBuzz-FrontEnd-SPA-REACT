import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";
import oneBuzzReducer from "./oneBuzzReducer";

describe("Given a oneBuzzReducer function", () => {
  describe("When it's called with a incrementLikes action with an id", () => {
    test("Then it should return a new state with the buzz likes incremented in one", () => {
      const buzzToLike: BuzzBasic | BuzzObject = {
        topic: "general",
        likes: 0,
        comments: [],
        author: "Madonna",
        text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
        id: "324k2l",
      };
      const buzzResult: BuzzBasic | BuzzObject = {
        topic: "general",
        likes: 1,
        comments: [],
        author: "Madonna",
        text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
        id: "324k2l",
      };

      const action = {
        type: actionsType.incrementLikes,
        id: (buzzToLike as BuzzObject).id,
      };

      const newState = oneBuzzReducer(buzzToLike, action);

      expect(newState).toEqual(buzzResult);
    });
  });
});
