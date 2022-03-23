import { BuzzObject } from "../../types/buzzInterfaces";
import actionsType from "../actions/actionsType";
import oneBuzzReducer from "./oneBuzzReducer";

describe("Given a oneBuzzReducer function", () => {
  describe("When it's called with a incrementLikes action with an id", () => {
    test("Then it should return a new state with the buzz likes incremented in one", () => {
      const buzzToLike: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 0,
        comments: [],
        author: {
          name: "Dan",
          username: "Danilovic",
          id: "623245decaa7d69f96f10a95",
        },
        text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
        id: "324k2l",
      };
      const buzzResult: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 1,
        comments: [],
        author: {
          name: "Dan",
          username: "Danilovic",
          id: "623245decaa7d69f96f10a95",
        },
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
      const buzzToLike: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 0,
        comments: [],
        author: {
          name: "Dan",
          username: "Danilovic",
          id: "623245decaa7d69f96f10a95",
        },
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
      const buzzToGetDetail: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 0,
        comments: [],
        author: {
          name: "Dan",
          username: "Danilovic",
          id: "623245decaa7d69f96f10a95",
        },
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
      const emptyBuzz: BuzzObject = {
        topic: "",
        date: "",
        text: "",
        likes: 0,
        id: "",
        author: {
          name: "",
          username: "",
          id: "",
        },
        comments: [],
      };
      const action = {
        type: "clean-buzz-detail",
      };
      const newState = oneBuzzReducer(emptyBuzz, action);

      expect(newState).toEqual(emptyBuzz);
    });
  });

  describe("When it's called with a commentBuzz action", () => {
    test("Then it should return a new state with the comment included in the array of comments of the current buzz", () => {
      const buzzToComment: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 1,
        comments: [],
        author: {
          name: "Mia",
          username: "Wallace",
          id: "623245decaa7d69f96f10a45",
        },
        text: "I hate uncomfortable silences",
        id: "324kAABB",
      };

      const commentToAdd = {
        author: {
          name: "Mia",
          username: "Wallace",
          id: "623245decaa7d69f96f10a45",
        },
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 1,
        id: "idinvented",
        topic: "general",
        text: "pero a ver, muchachada, display: none existe y tiene sus casos de uso",
      };

      const buzzResult: BuzzObject = {
        topic: "general",
        date: "2022-03-20T23:48:53.316+00:00",
        likes: 1,
        comments: [
          {
            author: {
              name: "Mia",
              username: "Wallace",
              id: "623245decaa7d69f96f10a45",
            },
            date: "2022-03-20T23:48:53.316+00:00",
            likes: 1,
            id: "idinvented",
            topic: "general",
            text: "pero a ver, muchachada, display: none existe y tiene sus casos de uso",
          },
        ],
        author: {
          name: "Mia",
          username: "Wallace",
          id: "623245decaa7d69f96f10a45",
        },
        text: "I hate uncomfortable silences",
        id: "324kAABB",
      };

      const action = {
        type: actionsType.commentBuzz,
        buzzComment: commentToAdd,
      };

      const newState = oneBuzzReducer(buzzToComment, action);

      expect(newState).toEqual(buzzResult);
    });
  });
});
