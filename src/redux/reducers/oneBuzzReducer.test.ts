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

  describe("When it's called with a nonexistent action", () => {
    test("Then it should return a new state with the same current buzz", () => {
      const buzzToLike: BuzzBasic | BuzzObject = {
        topic: "general",
        likes: 0,
        comments: [],
        author: "Freddie",
        text: "We are the champions",
        id: "6230c7a2f9d0f5ee1f58d6d9",
      };
      const action = {
        type: "some-incorrect-action",
        id: (buzzToLike as BuzzObject).id,
      };
      const newState = oneBuzzReducer(buzzToLike, action);

      expect(newState).toEqual(buzzToLike);
    });
  });

  describe("When it's called with a loadDetailBuzz action and a buzz object", () => {
    test("Then it should return a new state with the buzz object", () => {
      const buzzToGetDetail: BuzzBasic | BuzzObject = {
        topic: "general",
        likes: 0,
        comments: [],
        author: "Freddie",
        text: "We are the champions",
        id: "6230c7a2f9d0f5ee1f58d6d9",
      };
      const action = {
        type: "load-detail-buzz",
        buzz: buzzToGetDetail,
      };
      const newState = oneBuzzReducer(buzzToGetDetail, action);

      expect(newState).toEqual(buzzToGetDetail);
    });
  });

  describe("When it's called with a cleanBuzzDetail action", () => {
    test("Then it should return a new state with an empty buzz object", () => {
      const emptyBuzz: BuzzBasic | BuzzObject = {
        topic: "",
        text: "",
        author: "",
      };
      const action = {
        type: "clean-buzz-detail",
      };
      const newState = oneBuzzReducer(emptyBuzz, action);

      expect(newState).toEqual(emptyBuzz);
    });
  });
});
