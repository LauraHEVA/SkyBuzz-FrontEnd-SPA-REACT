import { BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";
import buzzsReducer from "./buzzsReducer";

describe("Given a buzzsReducer function", () => {
  describe("When it's called with a loadAllBuzzs action with an array of buzzs", () => {
    test("Then it should return a new state with the array of buzzs", () => {
      const currentBuzzs: BuzzObject[] = [];
      const buzzsToLoad: BuzzObject[] = [
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Madonna",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: "2022-03-08T19:21:30.764Z",
          id: "324k2l",
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Freddie",
          text: "Freddie is writting a very long, and also short, and repeated message and he is always copying Madonna's messages",
          date: "2022-03-08T19:21:30.764Z",
          id: "324k2l",
        },
      ];

      const action = {
        type: actionsType.loadAllBuzzs,
        buzzs: buzzsToLoad,
      };

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(buzzsToLoad);
    });
  });

  describe("When it's called with an nonexistent action", () => {
    test("Then it should return a new state with the current state (initial state)", () => {
      const currentBuzzs: BuzzObject[] = [
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Madonna",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: "2022-03-08T19:21:30.764Z",
          id: "324k2l",
        },
      ];

      const action = {
        type: "none",
        buzzs: currentBuzzs,
      };

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(currentBuzzs);
    });
  });

  describe("When it's called with a deleteBuzz action and an id", () => {
    test("Then it should return a new state without the buzz deleted", () => {
      const currentBuzzs: BuzzObject[] = [
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Madonna",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: "2022-03-08T19:21:30.764Z",
          id: "324k2l",
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Freddie",
          text: "Freddie is writting a very long and repeated message",
          date: "2022-03-08T19:22:30.764Z",
          id: "32454544",
        },
      ];

      const action = {
        type: "delete-one-buzz",
        id: "32454544",
      };

      const newBuzzsWithoutIdDeleted = [
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Madonna",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: "2022-03-08T19:21:30.764Z",
          id: "324k2l",
        },
      ];

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(newBuzzsWithoutIdDeleted);
    });
  });
});
