import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";
import buzzsReducer from "./buzzsReducer";

describe("Given a buzzsReducer function", () => {
  describe("When it's called with a loadAllBuzzs action with an array of buzzs", () => {
    test("Then it should return a new state with the array of buzzs", () => {
      const currentBuzzs: BuzzObject[] = [];
      const buzzsToLoad: BuzzObject[] = [
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
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

  describe("When it's called with a nonexistent action", () => {
    test("Then it should return a new state with the current state (initial state)", () => {
      const currentBuzzs: BuzzObject[] = [
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
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
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
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
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
      ];

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(newBuzzsWithoutIdDeleted);
    });
  });

  describe("When it's called with a addBuzz action and a buzz", () => {
    test("Then it should return a new state with the new buzz included", () => {
      const currentBuzzs: BuzzObject[] = [
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Freddie is writting a very long and repeated message",
          id: "32454544",
          date: "2022-03-11T12:22:36.899Z",
        },
      ];

      const action = {
        type: "add-new-buzz",
        buzz: {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Mia the best dancer",
          id: "324545ABED44",
          date: "2022-03-14T12:22:36.899Z",
        },
      };

      const newBuzzsWithNewOne = [
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Freddie is writting a very long and repeated message",
          id: "32454544",
          date: "2022-03-11T12:22:36.899Z",
        },
        {
          topic: "general",
          likes: 0,
          comments: [1],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Mia the best dancer",
          id: "324545ABED44",
          date: "2022-03-14T12:22:36.899Z",
        },
      ];

      const newState = buzzsReducer(currentBuzzs, action);

      expect(newState).toEqual(newBuzzsWithNewOne);
    });
  });

  describe("When it's called with a incrementLikes action with an id", () => {
    test("Then it should return a new state with the buzz likes incremented in one", () => {
      const buzzs: BuzzBasic[] | BuzzObject[] = [
        {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          date: "2022-03-13T23:23:27.981Z",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
        },
        {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          date: "2022-02-13T23:23:27.981Z",
          text: "Some stupid text",
          id: "324kBB",
        },
      ];
      const buzzsResult: BuzzBasic[] | BuzzObject[] = [
        {
          topic: "general",
          likes: 1,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          date: "2022-03-13T23:23:27.981Z",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          id: "324k2l",
        },
        {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          date: "2022-02-13T23:23:27.981Z",
          text: "Some stupid text",
          id: "324kBB",
        },
      ];

      const action = {
        type: actionsType.incrementLikes,
        id: (buzzs as BuzzObject[])[0].id,
      };

      const newState = buzzsReducer(buzzs, action);

      expect(newState).toEqual(buzzsResult);
    });
  });
});
