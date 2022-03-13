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
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Freddie",
          text: "Freddie is writting a very long, and also short, and repeated message and he is always copying Madonna's messages",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
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
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
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
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Freddie",
          text: "Freddie is writting a very long and repeated message",
          id: "32454544",
          date: "2022-03-11T12:22:36.899Z",
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
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
      ];

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(newBuzzsWithoutIdDeleted);
    });
  });
});
